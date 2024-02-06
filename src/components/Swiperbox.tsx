import React from 'react'
import Image from 'next/image'

interface SwiperTypes{
    image:any,
    name:string,
    location:string
}

function Swiperbox({image,name,location}:SwiperTypes) {
  return (
    <div className='swiper-slide'>
    {/* item */}
    <div className='testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center  p-9 mx-auto'>
        <div className='gap-4 mb-6 flex '>
            <Image
            src={image}
            alt="testimonial1"
            width={60}
            height={60}
            />
            <div >
                <h3 className='h3'>{name}</h3>
                <div>{location}</div>

            </div>

        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quaerat. Ipsum quod porro alias quibusdam, placeat tempore aliquam veritatis velit vitae aut facilis, dignissimos rem nesciunt, voluptatem similique? Tempora, nisi.</p>
        

    </div>

</div>
  )
}

export default Swiperbox