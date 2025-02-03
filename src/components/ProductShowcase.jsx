import React from 'react'
import ProductImage from "@/assets/product-image.png"
import Image from 'next/image'
const ProductShowcase = () => {
  return (
   <section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24'>
    <div className='container'>
        <div className='flex justify-center'>
        <div className='tag'>Boost Your Productivity</div>
        </div>
        <h2 className='text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>A more effective way to track progress</h2>
        <p className='text-center'>Effortlessly turn your idea into a fully functional, responsive, Saas website in just minute with this template.</p>
        <Image  src={ProductImage} alt="Product-Image" className=''/>
    </div>
   </section>
  )
}

export default ProductShowcase