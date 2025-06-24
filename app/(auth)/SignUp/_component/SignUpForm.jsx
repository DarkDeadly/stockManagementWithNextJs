"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import React, { useState } from 'react'
import { validateEmail , PasswordVerificaiton, PasswordMatching} from '@/lib/utils'
import {createUserWithEmailAndPassword} from "firebase/auth"
import toast from 'react-hot-toast'
import { Loader2Icon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import {auth} from '@/lib/config/db'
import { AddUser } from '@/lib/DatabasesServices/databaseApis'
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
  const [Loading, setLoading] = useState(false)


  const router = useRouter()





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
const handleRouter = () => {
        router.push("./signIn")
    }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const matchResult = PasswordMatching(SignUpForm.password, SignUpForm.confirmpassword); 
    const validationResult = validateEmail(SignUpForm.email);
    const passwordValidation = PasswordVerificaiton(SignUpForm.password)
    
    try {
    if (matchResult && validationResult && passwordValidation) {
    setLoading(true)
    const registeredCredential = await createUserWithEmailAndPassword(auth , SignUpForm.email , SignUpForm.password)
    
      const uid = registeredCredential.user.uid;
      await AddUser(uid, SignUpForm.username, SignUpForm.email);
      toast.success("Successfully registered")
      setLoading(false)
      router.push('./signIn')
    
    
    }
    } catch (error) {
      console.error(error)
    }
   
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
        <Button className={"p-6 text-center text-lg bg-[#2563EB] cursor-pointer"} type = 'submit'>{Loading && <Loader2Icon className='animate-spin'/>}Sign Up</Button>

      

        <p className="text-center text-lg max-[524px]:text-[15px]">
          You have an account?{' '}
          <span className="text-[#2563EB] underline cursor-pointer hover:text-purple-500" onClick={handleRouter}>
            Sign In
          </span>
        </p>
      </form>
    </div>
  )
}

export default SignUpForm