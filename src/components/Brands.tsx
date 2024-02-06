import Image from 'next/image';
import React from "react";

function BrandImage({image}:any) {
    return(
    <Image src={image} alt='brandimage' width={100} height={100} className='brands__img' />
    );
    
}

function Brands() {
  
  return (
    <section className='brands mt-[80px] xl:mt-[200px] relative z-20'>
        <div className='container mx-auto'>
            <div className=' flex flex-col xl:flex-row justify-between items-center gap-12'>
                <BrandImage  image="/assets/brands/01.svg"/>
                <BrandImage  image="/assets/brands/02.svg"/>
                <BrandImage  image="/assets/brands/03.svg"/>
                <BrandImage  image="/assets/brands/04.svg"/>
                <BrandImage  image="/assets/brands/05.svg"/>
            </div>

        </div>

    </section>
  )
}

export default Brands;