
"use client" 


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
const ProductTable = ({ productData }) => {

  const [ExportValue, setExportValue] = useState(0)  

    const handleExport = (product) => {
  console.log("Exporting product:", product);
  console.log(ExportValue)
}

  const handleChanges = (e) => {
    setExportValue(e.target.value)
  }
  return (
    <div>
      <Table>
        <TableCaption>A list of All The Products In The Stock.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-auto">Product Name</TableHead>
            <TableHead>Product Category</TableHead>
            <TableHead>Product Quantity</TableHead>
            <TableHead>Product Price</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productData &&
            productData.map((element, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{element.productName}</TableCell>
                <TableCell>{element.productCategory}</TableCell>
                <TableCell>{element.productQuantity}</TableCell>
                <TableCell>{element.productPrice} DT</TableCell>
                <TableCell>
                  <div className={"text-right"}>
                    <ExportButton handleEx={() => handleExport(element)} handleChanges = {handleChanges} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
