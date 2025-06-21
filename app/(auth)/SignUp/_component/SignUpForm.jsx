"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import React, { useState } from 'react'
import { validateEmail , PasswordVerificaiton, PasswordMatching} from '@/lib/utils'

const SignUpForm = () => {
  const [SignUpForm, setSignUpForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  })

  const [emailError, setEmailError] = useState('')
  const [PasswordError, setPasswordError] = useState()
  const [PasswordMatchings, setPasswordMatching] = useState("")

const handleForm = (e) => {
  const { name, value } = e.target;

  // Update the form state
  setSignUpForm((prevValues) => ({
    ...prevValues,
    [name]: value,
  }));

  // Validate email
  if (name === 'email') {
    const validationResult = validateEmail(value);
    setEmailError(validationResult === true ? '' : validationResult);
  }
  if (name ==="password") {
      const passwordValidation = PasswordVerificaiton(value)
      setPasswordError(passwordValidation.length == 0 ? '' : passwordValidation)

  }
   if (name === 'confirmpassword') {
    const matchResult = PasswordMatching(SignUpForm.password, value); 
    setPasswordMatching(matchResult === true ? '' : matchResult); 
  }
};

  const handleSubmit = (e) => {
    e.preventDefault()
   

   
  }

  return (
    <div className="w-[80%] rounded-xl bg-white shadow-2xl max-[524px]:w-[100%] mt-5">
      <h2 className="text-center font-bold text-2xl py-5">Welcome To StockMaster</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5">
        <Label htmlFor="username" className={"text-xl"}>
          Username
        </Label>
        <Input
          type="text"
          id="username"
          placeholder="Insert your Username"
          className={"p-5 placeholder:text-md"}
          name="username"
          onChange={handleForm}
        />

        <Label htmlFor="email" className={"text-xl"}>
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Insert your Email"
          className={`p-5 placeholder:text-md  ${emailError ? 'border-red-600 border-2' : 'border-green-800 focus:border-green-300 border-2'}`}
          required
          name="email"
          onChange={handleForm}
        />
        {emailError && <p className="text-red-500 font-medium">{emailError}</p>} {/* Show error only when email is invalid */}

        <Label htmlFor="password" className={"text-xl"}>
          Password
        </Label>
        <Input
          type="password"
          id="password"
          placeholder="Insert your Password"
          className={`p-5 placeholder:text-md  ${PasswordError ? 'border-red-600 border-2' : 'border-green-800 focus:border-green-300 border-2'}`}
          required
          name="password"
          onChange={handleForm}
        />
        {
         PasswordError && PasswordError.map((err , index) => (
            <p key={index} className='text-red-500 font-medium'>{err}</p>
          ))
        }
        <Label htmlFor="confirmpassword" className={"text-xl"}>
          Confirm Password
        </Label>
        <Input
          type="password"
          id="confirmpassword"
          placeholder="Confirm your Password"
          className={`p-5 placeholder:text-md  ${PasswordMatchings ? 'border-red-600 border-2' : 'border-green-800 focus:border-green-300 border-2'}`}
          required
          name="confirmpassword"
          onChange={handleForm}
        />
        {PasswordMatchings && <p className='text-red-500 font-medium'>{PasswordMatchings}</p>}
        <Button className={"p-6 text-center text-lg bg-[#2563EB] cursor-pointer"} type = 'submit'>Sign Up</Button>

        <div className="flex items-center text-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-4 text-gray-500">or you can continue with</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        
        <Button className={"p-6 text-lg bg-[#2563EB] cursor-pointer"}>
          <Image src={"./google.svg"} alt="Google" height={20} width={20} className="cursor-pointer" />
          Continue with Google
        </Button>

        <p className="text-center text-lg max-[524px]:text-[15px]">
          You have an account?{' '}
          <span className="text-[#2563EB] underline cursor-pointer hover:text-purple-500">
            Sign In
          </span>
        </p>
      </form>
    </div>
  )
}

export default SignUpForm