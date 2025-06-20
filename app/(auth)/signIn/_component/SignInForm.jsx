import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SignInForm = () => {
     const router = useRouter()

    const handleRouter = () => {
        router.push("./SignUp")
    }
  return (
    <div className="w-[80%] rounded-xl bg-white shadow-2xl max-[524px]:w-[100%] mt-5">
      <h2 className="text-center font-bold text-2xl py-5">Welcome Back</h2>
      <form action="" className="flex flex-col gap-3  p-5">
        <Label htmlFor="email" className={"text-xl"}>
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="insert your Email"
          className={"p-5 placeholder:text-md"}
        />
        <Label htmlFor="password" className={"text-xl"}>
          Password
        </Label>
        <Input
          type="password"
          id="password"
          placeholder="insert your Password"
          className={"p-5 text-xl placeholder:text-md"}
        />
       
          
          <p className="  text-md text-blue-500 underline cursor-pointer hover:text-purple-500 ">
            Forget Password
          </p>
    
        <Button className={"p-6 text-center text-lg bg-[#2563EB] cursor-pointer"}>Sign In</Button>
        <div className="flex items-center text-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-4 text-gray-500">or you can continue with</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
            <Button className={"p-6 text-lg bg-[#2563EB] cursor-pointer"}><Image  src={"./google.svg"} alt="Google" height={20} width={20} className="cursor-pointer"/> continue with Google</Button>
            <p className="text-center text-lg max-[524px]:text-[15px]" >Don't have an account? <span className="text-[#2563EB] underline cursor-pointer hover:text-purple-500 " onClick={( )=> handleRouter()}>Sign up</span></p>
        
      </form>
    </div>
  );
};

export default SignInForm;
