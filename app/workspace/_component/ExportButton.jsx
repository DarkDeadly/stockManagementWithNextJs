
"use client"

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
const ExportButton = ({handleEx , handleChanges , loading , handleIm , handleDel}) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
        <Button className={"cursor-pointer"}>Edit/delete</Button>

        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Exporting</DialogTitle>
            <DialogDescription>
              before exporting are you sure you want to do it 
            </DialogDescription>
          </DialogHeader>
          <Input placeholder = "how many item you want to export" type={"number"} onChange = {handleChanges}/>
          <Button className={"cursor-pointer"} onClick={handleEx} disabled = {loading}>{loading && <Loader2Icon className="animate-spin"/>} Export</Button>
          <Button className={"cursor-pointer"} onClick={handleIm} disabled = {loading}>{loading && <Loader2Icon className="animate-spin"/>} Import</Button>
          <Button className={"cursor-pointer bg-red-500 hover:bg-red-400"} onClick = {handleDel} disabled ={loading} >{loading && <Loader2Icon className="animate-spin"/>} Delete</Button>

        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExportButton;
