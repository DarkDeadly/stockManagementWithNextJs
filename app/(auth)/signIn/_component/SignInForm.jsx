"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth, provider } from "@/lib/config/db";
import { AddUser } from "@/lib/DatabasesServices/databaseApis";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const SignInForm = () => {
  const [SignInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });
  const [Loading, setLoading] = useState(false);
    const [LoadingGoogle, setLoadingGoogle] = useState(false);

  const [passError, setpassError] = useState("");
  const router = useRouter();

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setSignInForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRouter = () => {
    router.push("./SignUp");
  };
  const SubmitHandle = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const SigninProcess = await signInWithEmailAndPassword(
        auth,
        SignInForm.email,
        SignInForm.password
      );
      if (SigninProcess) {
        toast.success("Successfully Logged In");
        setLoading(false);
      } else {
        toast.error("Invalid Credential");
      }
    } catch (error) {
      console.log(error.code);
    }
  };
  const googleHandle = async () => {
    try {
      setLoadingGoogle(true)
      const GoogleSign = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(GoogleSign);
      const token = credential.accessToken;
     if (GoogleSign) {
      const GoogleData = GoogleSign.user
       AddUser(GoogleData.displayName , GoogleData.email , "user" ,GoogleData.photoURL)
       toast.success("Signed in with Google!");
      setLoadingGoogle(false)
     }
    } catch (error) {
      console.log(error.code);
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };
  return (
    <div className="w-[80%] rounded-xl bg-white shadow-2xl max-[524px]:w-[100%] mt-5">
      <h2 className="text-center font-bold text-2xl py-5">Welcome Back</h2>
      <form
        action=""
        className="flex flex-col gap-3  p-5"
        onSubmit={SubmitHandle}
      >
        <Label htmlFor="email" className={"text-xl"}>
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="insert your Email"
          className={"p-5 placeholder:text-md"}
          name="email"
          onChange={handleChanges}
        />
        <Label htmlFor="password" className={"text-xl"}>
          Password
        </Label>
        <Input
          type="password"
          id="password"
          placeholder="insert your Password"
          className={"p-5 text-xl placeholder:text-md"}
          name="password"
          onChange={handleChanges}
        />

        <p className="  text-md text-blue-500 underline cursor-pointer hover:text-purple-500 ">
          Forget Password
        </p>

        <Button
          className={"p-6 text-center text-lg bg-[#2563EB] cursor-pointer"}
          disabled={Loading}
          type="submit"
        >
          {Loading && <Loader2Icon className="animate-spin" />} Sign In
        </Button>
        <div className="flex items-center text-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-4 text-gray-500">or you can continue with</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <Button className={"p-6 text-lg bg-[#2563EB] cursor-pointer"} type={"button" } onClick = {() => googleHandle()}>
          {LoadingGoogle ? <Loader2Icon className="animate-spin" /> : <Image
            src={"./google.svg"}
            alt="Google"
            height={20}
            width={20}
            className="cursor-pointer"
          /> }
         
          continue with Google
        </Button>
        <p className="text-center text-lg max-[524px]:text-[15px]">
          Don't have an account?{" "}
          <span
            className="text-[#2563EB] underline cursor-pointer hover:text-purple-500 "
            onClick={() => handleRouter()}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
