import React from "react";
import AuthAnnouncer from "../signIn/_component/AuthAnnouncer";
import Image from "next/image";
import SignUpForm from "./_component/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex">
      <AuthAnnouncer />
      <div className=' w-[50%] bg-gray-300 flex flex-col justify-center items-center p-5 max-[970px]:w-[100%]'>
        <div className="flex gap-3  items-center justify-center">
          <Image src={"./logo.svg"} alt="logo" height={40} width={40} />
          <h2 className="text-3xl font-extrabold ">Stock Master</h2>
        </div>
        <p className="my-5 text-gray-800 font-medium text-xl max-[524px]:hidden">
          Professional Stock Management Platform
        </p>
          <SignUpForm/>
      </div>
    
    </div>
  );
};

export default SignUp;
