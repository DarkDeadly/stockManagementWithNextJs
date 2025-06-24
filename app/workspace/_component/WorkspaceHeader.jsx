import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import React from "react";

const WorkspaceHeader = ({ AuthenticatedUser }) => {
  const formattedDate = format(new Date(), "MMMM do yyyy");
  return (
    <div className="flex justify-between p-3 border-b-2 ">
      <div>
        <h1 className="text-2xl font-bold">welcome {AuthenticatedUser.username || "Loading UserName"} to StockMaster</h1>
        <p className="text-gray-600 text-xl pt-2"> today : {formattedDate}</p>
      </div>
      <div className="flex gap-2 items-center ">
        <Input
          className={
            "px-6 py-3 placeholder:text-white bg-gray-300 text-white rounded-full"
          }
          type={"text"}
          placeholder="Search ..."
        />

        {AuthenticatedUser.profileimg && (
          <Avatar className={"mx-5"}>
            <AvatarImage src={AuthenticatedUser.profileimg} />
          </Avatar>
        )}
      </div>
    </div>
  );
};

export default WorkspaceHeader;
