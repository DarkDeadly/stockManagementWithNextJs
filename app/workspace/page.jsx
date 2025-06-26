"use client";

import React, { useContext, useEffect, useState } from "react";
import Sidebarwork from "./_component/Sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import WorkspaceHeader from "./_component/WorkspaceHeader";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/config/db";
import { gettingProducts, GetUser } from "@/lib/DatabasesServices/databaseApis";
import { UserContext } from "@/context/UserContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ProductAnalytics } from "@/lib/utils";
import WorkSpaceCards from "./_component/WorkSpaceCards";
import { Input } from "@/components/ui/input";
import 'react-loading-skeleton/dist/skeleton.css'
import loadingAnimation from "../../public/loadigScreen.json"
import AddProduct from "./_component/AddProduct";
import ProductTable from "./_component/ProductTable";
import Lottie from "lottie-react";

const Workspace = () => {
  const router = useRouter();




  const { AuthenticatedUser, setAuthenticatedUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [Products, setProducts] = useState();
  const [SearchValue, setSearchValue] = useState('')
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



const FilteredProduct = Products?.filter((value) =>
  value.productName.toLowerCase().includes(SearchValue.toLowerCase())
);

  return (
   <>
   {loading ? (
  <div className="w-full flex justify-center items-center h-[50%]">
    <Lottie animationData={loadingAnimation} />
  </div>
) : (
  <div className="flex w-full">
      <Sidebarwork />
      <div className="bg-[#F8FAFC] h-full">
        <SidebarTrigger className={"cursor-pointer p-5"} />
      </div>

      <div className="w-full">
        <WorkspaceHeader AuthenticatedUser={AuthenticatedUser} />
        <div className="flex justify-center">
          <div className="w-[95%]  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  my-9 gap-4 ">
            {ProductAnalytics.map((item, index) => (
              <WorkSpaceCards items={item} key={index} />
            ))}
          </div>
        </div>
        <div className="flex justify-center flex-col w-[95%] bg-[#F8F8F8] m-auto rounded-xl my-5 ">
          <div className=" flex justify-between  p-5  items-center">
            <h1 className="text-xl font-bold">Products Overview</h1>
            <div className="flex gap-4">
              <Input placeholder="Search Products ..." className={"px-7"}  onChange = {(e) => setSearchValue(e.target.value)}/>
              <AddProduct />
            </div>
          </div>
          <div className="p-5">
            <ProductTable productData={FilteredProduct} />
          </div>
        </div>
      </div>
    </div>
)}
   </>
    
  );
};

export default Workspace;
