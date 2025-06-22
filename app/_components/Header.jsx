"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {  useState } from "react";

const Header = () => {
  const [Toggle, setToggle] = useState(false);
  


  const router = useRouter()



  const HandleToggleMenu = () => {
    setToggle(!Toggle);
  };
  
  return (
    <div className="sticky top-0 z-50 bg-white border-b-2 border-gray-300 w-full">
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-5">
          <Image src={"/logo.svg"} alt="Logo" height={40} width={40} />
          <h1 className="font-bold text-2xl">StockMaster</h1>
        </div>

        {/* Desktop Menu */}
        <div className={`flex gap-7 max-[786px]:hidden items-center`}>
          <Link href={""}>Home</Link>
          <Link href={""}>Analytics</Link>
          <Link href={""}>Users</Link>
          <Link href={""}>Products</Link>
          <Button className="cursor-pointer px-5" variant="outline">
            Login
          </Button>
          <Button className="cursor-pointer px-5">Get Started</Button>
        </div>

        {/* Hamburger Menu Icon */}
        {Toggle ? <X className="hidden max-[786px]:block" onClick={() => HandleToggleMenu()} /> : <Menu className="hidden max-[786px]:block" onClick={() => HandleToggleMenu()} />}
      </div>

      {/* Mobile Dropdown */}
      {Toggle && (
        <div className="flex flex-col gap-4 px-5 pb-5 max-[458px]:h-screen  justify-around ">
          <div className="flex flex-col gap-7 max-[458px]:text-center">
          <Link href={""}>Home</Link>
          <Link href={""}>Analytics</Link>
          <Link href={""}>Users</Link>
          <Link href={""}>Products</Link>
          </div>
        <div>
            <Button variant="outline" className="w-full" onClick ={() => router.push("./signIn")}>
            Login
          </Button>
          <Button className="w-full"  onClick ={() => router.push("./SignUp")}>Get Started</Button>
        </div>
        </div>
      )}
    </div>
  );
};

export default Header;
