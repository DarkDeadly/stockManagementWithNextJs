import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
const PriceItems = ({ element }) => {
  return (
    <div>
      <Card className={"h-[390px] flex flex-col justify-around"}>
        <CardHeader>
          <CardTitle className={'text-2xl text-black'}>{element.title}</CardTitle>
          <CardDescription className={"text-4xl text-black"}>{element.Price}</CardDescription>
        </CardHeader>
        <CardContent className={"flex flex-col gap-2"}>
          {element.Benefits.map((el , index) => (
            <p key={index} className="flex font-bold gap-3"><Check className="text-green-700 font-bold"/> {el}</p>
          ))}
        </CardContent>
        <CardFooter >
          <Button className={`w-full ${element.id %2 == 0 ? "bg-black" : "bg-gray-400"} cursor-pointer`}>Get Started</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PriceItems;
