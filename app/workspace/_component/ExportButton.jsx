
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
const ExportButton = ({handleEx , handleChanges}) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
        <Button className={"cursor-pointer"}>Export</Button>

        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Exporting</DialogTitle>
            <DialogDescription>
              before exporting are you sure you want to do it 
            </DialogDescription>
          </DialogHeader>
          <Input placeholder = "how many item you want to export" type={"number"} onChange = {handleChanges}/>
          <Button className={"cursor-pointer"} onClick={handleEx}>Submit</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExportButton;
