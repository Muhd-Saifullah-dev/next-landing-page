import React from 'react'
import { ArrowRight,Menu } from 'lucide-react'
import Logo from "@/assets/logosaas.png"
import Image from 'next/image'

const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
    <div className='flex justify-center items-center py-3 bg-black text-white text-sm gap-3'>
        <p className='text-white/60 hidden md:block'>Streamline your workflow and boost your productivity</p>
        <div className='inline-flex gap-1 items-center'>
        <p>Get started for free</p>
        <ArrowRight className='h-4 w-4' />
        </div>
    </div>
    <div className='py-5'>
        <div className='container'>
            <div className='flex items-center justify-between'>
      <Image src={Logo} alt="saas logo" width={40} height={40}/>
      <Menu className='h-5 w-5 md:hidden' />
      <nav className='hidden md:flex gap-6 text-black/60 items-center'>
        <a href='#' >About</a>
        <a href='#' >Feature</a>
        <a href='#' >Customers</a>
        <a href='#' >Updates</a>
        <a href='#' >Help</a>
        <button className='bg-black px-4 text-white py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight '>Get for free</button>
      </nav>
      </div>
      </div>
    </div>
    </header>
  )
}

export default Header