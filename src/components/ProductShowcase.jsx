import React from 'react'
import ProductImage from "@/assets/product-image.png"
import pyramid from "@/assets/pyramid.png"
import TubeImage from "@/assets/tube.png"
import Image from 'next/image'
const ProductShowcase = () => {
  return (
   <section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
    <div className='container'>
        <div className='section-heading'>
        <div className='flex justify-center'>
        <div className='tag'>Boost Your Productivity</div>
        </div>
        <h2 className='section-title mt-5'>A more effective way to track progress</h2>
        <p className='section-description mt-5'>Effortlessly turn your idea into a fully functional, responsive, Saas website in just minute with this template.</p>
        </div>
        <div className='relative'>
        <Image  src={ProductImage} alt="Product-Image" className='mt-10'/>
        <Image  src={pyramid}  alt="Pyramid-Image" height={262} width={262} className='hidden md:block absolute -right-36 -top-32'/>
        <Image src={TubeImage} alt="tube-imge" className='hidden md:block absolute bottom-24 -left-36' height={242} />
        </div>
    </div>
   </section>
  )
}

export default ProductShowcase