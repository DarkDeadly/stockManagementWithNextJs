import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <div className='flex items-center justify-between p-5  border-b-2 border-gray-300 sticky top-0 bg-white'>
          <div className='flex items-center gap-5'>
            <Image src={"./logo.svg"} alt='Logo' height={40} width={40} />
            <h1 className='font-bold text-2xl'>StockMaster</h1>  
          </div>  
          <div className='flex gap-7 max-[767px]:hidden'>
                <Link href={""}>Home</Link>
                <Link href={""}>Analytics</Link>
                <Link href={""}>Users</Link>
                <Link href={""}>Products</Link>
            </div>
            <div className='flex gap-4'>
                <Button className={"cursor-pointer px-5"} variant={"outline"}>Login</Button>
                <Button className={"cursor-pointer px-5"}>Get Started</Button>
            </div>
      </div>  
    
  )
}

export default Header