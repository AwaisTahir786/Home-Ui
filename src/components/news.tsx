/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { RiArrowRightSLine } from '@remixicon/react';
import React from "react";

interface ItemsTypes{
    image:any,
    title:string,
    date:string
}

function Items({image,title,date}:ItemsTypes) {

    return(
        <div className='news__item w-full max-w-[382px]  h-[520px] bg-white border-primary rounded-[62px] p-[20px] hover:bg-accent-secondary transtion-all group cursor-pointer mx-auto xl:mx-0'>
                <Image 
                src={image}
                alt="news-img"
                width={400}
                height={400}
                className='mb-5'
                />
                <div className='flex flex-col gap-[30px]'>
                    <h3 className='h3'>
                        {title}

                    </h3>
                    <div className='flex items-center justify-between'>
                        <p className='text-base'>{date}</p>
                        <button className='bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:bg-white transition-all flex justify-center items-center'>
                            <RiArrowRightSLine className='text-3xl text-primary pl-1' />
                        </button>
                    </div>

                </div>
            </div>

    )
    
}








function News() {
  return (
    <section className='news mt-[30px] xl:mt-[50px] relative z-20 py-[80px] xl:py-[50px]'>
    <div className='container mx-auto px-0'>
        {/* text */}
        <div className='max-w-[810px] mx-auto text-center mb-[52px]'>
            <h2 className='news__title h2 mb-3'>Articles & News</h2>
            <p className='news__subtitle'>
                It is a long establised fact that a reader will be distracted by the of readable content of a page when looking at its layouts the points of using.
            </p>

        </div>
        {/* grid */}
        <div className='news__grid grid grid-cols-1 xl:grid-cols-3 gap-[27px]'>
            {/* grid item */}
           <Items image="/assets/news/01.png" title="Let's Get Solution For Building Construction Work" date="22 Jan,2024" />
             {/* grid item */}
             <Items image="/assets/news/02.png" title="Let's Get Solution For Building Construction Work" date="22 Jan,2024" />
               {/* grid item */}
           <Items image="/assets/news/03.png" title="Let's Get Solution For Building Construction Work" date="22 Jan,2024" />

        </div>

        </div>

    </section>
  )
}

export default News;