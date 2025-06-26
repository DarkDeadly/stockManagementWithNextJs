"use client";

import { Button } from "@/components/ui/button";
import { Loader2Icon, PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import CategorySelection from "./CategorySelection";
import { auth } from "@/lib/config/db";
import { addingProductToUser, AddProducts } from "@/lib/DatabasesServices/databaseApis";
import toast from "react-hot-toast";

const AddProduct = () => {
  const [ProductData, setProductData] = useState({});
  const [Loading, setLoading] = useState(false);
  const closeRef = useRef(null); 
  const user = auth.currentUser;

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        setLoading(true);
        const ProductID = await AddProducts(
          ProductData.prodName,
          Number(ProductData.prodPrice),
          ProductData.ProdCategory,
          Number(ProductData.prodQuantity),
        );
        if (ProductID) {
          await addingProductToUser(
          ProductData.prodName,
          Number(ProductData.prodPrice),
          ProductData.ProdCategory,
          Number(ProductData.prodQuantity),
          user.uid,
          ProductID
        );
        }
        toast.success("Product added successfully");
        setLoading(false);

        if (closeRef.current) closeRef.current.click();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className={"cursor-pointer bg-primary"}>
            <PlusCircle /> Add Product
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add A Product</DialogTitle>
            <DialogDescription>
              Fill in the details below to add a new product to your inventory.
            </DialogDescription>
          </DialogHeader>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <Input
              required
              type={"text"}
              placeholder="Enter product name"
              name="prodName"
              onChange={handleChanges}
            />
            <CategorySelection name={"ProdCategory"} onChange={handleChanges} />
            <Input
              required
              type={"number"}
              placeholder="How many in stock"
              name="prodQuantity"
              onChange={handleChanges}
            />
            <Input
              required
              type={"number"}
              placeholder="Enter the price"
              name="prodPrice"
              onChange={handleChanges}
            />
            <DialogFooter>
              <Button type="submit" disabled={Loading}>
                {Loading && <Loader2Icon className="animate-spin" />} Submit
              </Button>
              <DialogClose asChild>
                <button
                  type="button"
                  variant="secondary"
                  className="hidden"
                  ref={closeRef}
                >
                  Close
                </button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProduct;
