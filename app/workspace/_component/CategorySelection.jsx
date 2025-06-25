import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const CategorySelection = ({name , onChange}) => {
  return (
    <div>
      <Select name = {name}   onValueChange={(value) => {
          onChange({ target: { name, value } });
        }}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="furniture">furniture</SelectItem>
          <SelectItem value="sports">sports</SelectItem>
          <SelectItem value="computer Science">computer Science</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategorySelection;
