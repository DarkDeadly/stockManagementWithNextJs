import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-secondary-foreground p-10 ">
      <div className="flex justify-around  border-b-2 border-amber-50 pb-5">
        <div className="flex flex-col gap-3 ">
        <div className="flex items-center gap-3">
          <Image src={"/logonight.svg"} alt="logo" height={30} width={30} />
          <h1 className="font-bold text-2xl text-white">Inventory Pro</h1>
        </div>
        <p className="text-gray-400">Streamline your inventory management with powerful tools and insights.</p>
      </div>
      <div className="flex flex-col gap-3 text-gray-500 max-[458px]:hidden">
        <h3 className="text-white text-lg font-bold cursor-pointer">Product</h3>
        <p className="hover:text-white cursor-pointer">Features</p>
        <p className="hover:text-white cursor-pointer">Pricing</p>
        <p className="hover:text-white cursor-pointer">Integrations</p>
      </div>
       <div className="flex flex-col gap-3 text-gray-500 max-[458px]:hidden">
        <h3 className="text-white text-lg font-bold cursor-pointer">Company</h3>
        <p className="hover:text-white cursor-pointer">About</p>
        <p className="hover:text-white cursor-pointer">Blog</p>
        <p className="hover:text-white cursor-pointer">Careers</p>
      </div>
      </div>
      <p className="text-bold text-white text-center py-5">© 2025 Inventory Pro. All rights reserved by Anis Omri.</p>
    </div>
  );
};

export default Footer;
