"use client";

import React, { useContext, useEffect, useState } from "react";
import Sidebarwork from "./_component/Sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import WorkspaceHeader from "./_component/WorkspaceHeader";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/config/db";
import { UserContext } from "@/context/UserContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ProductAnalytics } from "@/lib/utils";
import WorkSpaceCards from "./_component/WorkSpaceCards";
import { Input } from "@/components/ui/input";
import "react-loading-skeleton/dist/skeleton.css";
import loadingAnimation from "../../public/loadigScreen.json";
import AddProduct from "./_component/AddProduct";
import ProductTable from "./_component/ProductTable";
import Lottie from "lottie-react";
import { GetUser } from "@/lib/DatabasesServices/userDatabase";
import { gettingProducts } from "@/lib/DatabasesServices/databaseApis";
import { GetExportedDatas } from "@/lib/DatabasesServices/ExportedProduct";
import { AnalyticsContext } from "@/context/AnalyticsContext";

const Workspace = () => {
  const router = useRouter();

  const { AuthenticatedUser, setAuthenticatedUser } = useContext(UserContext);
  const {Analytics, setAnalytics} = useContext(AnalyticsContext)
  const [loading, setLoading] = useState(true);
  const [Products, setProducts] = useState();
  const [SearchValue, setSearchValue] = useState("");
  const [TotalProducts, setTotalProducts] = useState(0);
  const [ExportedProducts, setExportedProducts] = useState()




  useEffect(() => {
    let unsubscribeProducts;
    let isMounted = true;

    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user && isMounted) {
        try {
          const AuthenticatedUsers = await GetUser(user.uid);
          setAuthenticatedUser(AuthenticatedUsers);
          unsubscribeProducts = gettingProducts((fetchedProducts) => {
            setProducts(fetchedProducts);
            setLoading(false);
          });
        } catch (err) {
          toast.error("Something went wrong");
          console.log(err);
          setLoading(false);
        }
      } else {
        router.push("/signIn");
      }
    });

    return () => {
      isMounted = false;
      unsubscribeAuth();
      if (unsubscribeProducts) unsubscribeProducts();
    };
  }, []);

  useEffect(() => {
    if (!Products) return;

    Products.forEach((product) => {
      if (product.productQuantity <= 5) {
        toast.error(`⚠️ The product "${product.productName}" is low on stock.`);
      }
    });

    const total = Products.reduce(
      (sum, product) => sum + product.productQuantity,
      0
    );
    setTotalProducts(total);
  }, [Products]);
 useEffect(() => {
  const unsubscribe = GetExportedDatas(setExportedProducts);

  return () => unsubscribe();
}, []);
  const DynamicAnalytics = [
    {
      ...ProductAnalytics[0],
      value: TotalProducts,
    },
    {
      ...ProductAnalytics[1],
      value: Products?.filter((p) => p.productQuantity <= 5).length || 0,
    },
    {
      ...ProductAnalytics[2],
      value: ExportedProducts && ExportedProducts.length ,
    },
  ];
  const FilteredProduct = Products?.filter((value) =>
    value.productName.toLowerCase().includes(SearchValue.toLowerCase())
  );
  useEffect(() => {
  const newAnalytics = [
    { ...ProductAnalytics[0], value: TotalProducts },
    { ...ProductAnalytics[1], value: Products?.filter((p) => p.productQuantity <= 5).length || 0 },
    { ...ProductAnalytics[2], value: ExportedProducts?.length || 0 },
  ];

  setAnalytics(newAnalytics); 
}, [TotalProducts, Products, ExportedProducts]);
  return (
    <>
      {loading ? (
        <div className="w-full flex justify-center items-center h-[50%]">
          <Lottie animationData={loadingAnimation} />
        </div>
      ) : (
        <div className="flex w-full">
          {AuthenticatedUser ? (
            <Sidebarwork User={AuthenticatedUser} />
          ) : (
            <p>Loading user data...</p>
          )}
          <div className="bg-[#F8FAFC] h-full">
            <SidebarTrigger className={"cursor-pointer p-5"} />
          </div>

          <div className="w-full">
            <WorkspaceHeader AuthenticatedUser={AuthenticatedUser} />
            <div className="flex justify-center">
              <div className="w-[95%]  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  my-9 gap-4 ">
                {DynamicAnalytics.map((item, index) => (
                  <WorkSpaceCards items={item} key={index} />
                ))}
              </div>
            </div>
            <div className="flex justify-center flex-col w-[95%] bg-[#F8F8F8] m-auto rounded-xl my-5 ">
              <div className=" flex justify-between  p-5  items-center">
                <h1 className="text-xl font-bold max-[692px]:hidden">
                  Products Overview
                </h1>
                <div className="flex gap-4">
                  <Input
                    placeholder="Search Products ..."
                    className={"px-7"}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  {["admin", "boss"].includes(AuthenticatedUser?.role) && (
                    <AddProduct />
                  )}
                </div>
              </div>
              <div className="p-5 overflow-x-auto">
                <ProductTable
                  productData={FilteredProduct}
                  authenticatedUser={AuthenticatedUser}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Workspace;
