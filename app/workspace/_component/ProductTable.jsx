"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ExportButton from "./ExportButton";
import {
  deleteProduct,
  deleteUserProduct,
  updateProductQuantity,
  UpdateUserProduct,
} from "@/lib/DatabasesServices/databaseApis";
import { auth } from "@/lib/config/db";
import toast from "react-hot-toast";
import { AddExportData } from "@/lib/DatabasesServices/ExportedProduct";
const ProductTable = ({ productData , authenticatedUser}) => {
  const [ExportValue, setExportValue] = useState(0);
  const [Loading, setLoading] = useState(false);
  const user = auth.currentUser;

  const handleImport = async (product) => {
    if (user) {
      const finalQuantity = product.productQuantity + Number(ExportValue);

      await updateProductQuantity(finalQuantity, product.id);
      await UpdateUserProduct(user.uid, product.id, finalQuantity);
    }
  };
  const handleDelete = async (product) => {
    setLoading(true)
    await deleteProduct(product.id)
    await deleteUserProduct(product.id ,user.uid)
    await AddExportData(product.productName , user.uid)

    toast.success('delete complete')
    setLoading(false)

  }
  const handleExport = async (product) => {
    setLoading(true);
    if (user) {
      if (product.productQuantity <= Number(ExportValue)) {
        const finalQuantity = 0;
        await updateProductQuantity(finalQuantity, product.id);
        await UpdateUserProduct(user.uid, product.id, finalQuantity);
        await deleteProduct(product.id)
        await deleteUserProduct(product.id ,user.uid)
        await AddExportData(product.productName , user.uid)
      } else {
        const finalQuantity = product.productQuantity - Number(ExportValue);
        await updateProductQuantity(finalQuantity, product.id);
        await UpdateUserProduct(user.uid, product.id, finalQuantity);
      }
    }
    setLoading(false);
  };

  const handleChanges = (e) => {
    setExportValue(e.target.value);
  };
  return (
    <div>
      <Table>
        <TableCaption>A list of All The Products In The Stock.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-auto">Product Name</TableHead>
            <TableHead className={"max-[971px]:hidden"}>Product Category</TableHead>
            <TableHead>Product Quantity</TableHead>
            <TableHead>Product Price</TableHead>
            {["admin", "boss"].includes(authenticatedUser?.role) && <TableHead className="text-right">Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {productData &&
            productData.map((element, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {element.productName}
                </TableCell>
                <TableCell className={"max-[971px]:hidden"}>{element.productCategory}</TableCell>
                <TableCell>{element.productQuantity}</TableCell>
                <TableCell>{element.productPrice} DT</TableCell>
                <TableCell className={"text-right"}>
                  
                   {["admin", "boss"].includes(authenticatedUser?.role) &&  <ExportButton
                      handleEx={() => handleExport(element)}
                      handleChanges={handleChanges}
                      loading={Loading}
                      handleIm = {() => handleImport(element)}
                      handleDel = {() => handleDelete(element)}
                    />}
                  
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
