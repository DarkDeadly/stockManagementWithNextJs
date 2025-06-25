"use client"

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
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
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import CategorySelection from "./CategorySelection";

const AddProduct = () => {
    const [ProductData, setProductData] = useState({})

    const handleChanges = (e) => {
        const {name , value} = e.target
        setProductData((prevData) => ({
            ...prevData , [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(ProductData)
    }
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
            <Input type={"text"} placeholder="enter product name" name = "prodName" onChange = {handleChanges}/>
            <CategorySelection name = {"ProdCategory"} onChange = {handleChanges}/>
            <Input type={"number"} placeholder="How many in the stock" name = "prodQuantity" onChange = {handleChanges}/>
            <Input type = {"number"} placeholder= "enter the price " name = "prodPrice" onChange = {handleChanges}/>
            <DialogFooter>
              <Button className={"cursor-pointer"} type = "submit" >Submit</Button>
              <DialogClose asChild>
                <Button type="button" variant="secondary" className={"cursor-pointer"} >
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProduct;
