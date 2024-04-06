
import Image from 'next/image';
import { RiArrowRightLine, RiPhoneFill } from '@remixicon/react';
import React from "react";


function About() {
    
    
  return (
    <section className='about mt-[80px] xl:mt-[200px] relative z-20' id='about'>
        <div className='container mx-auto xl:px-0'>
            <div className='flex flex-col xl:flex-row text-center xl:text-left justify-between items-center gap-8 xl:gap-[74px]'>
                <div className='about__text flex-1 order-2 xl:order-none max-w-xl xl:max-w-[410px] flex flex-col items-center xl:items-start gap:8'>
                    <h2 className='h2'>
                        We Create The Art Of Stylish Living Stylishly.
                    </h2>
                    <p>It is a long established fact that a reader will be distracted by the of readable content of a page when at its layouts the points of using that it has a more-or-less normal.</p>
                    {/* phone */}
                    <div className='flex items-center justify-center xl:justify-start gap-4 mt-6'>
                        <div className='bg-accent/15 w-[93px] h-[93px] rounded-full flex justify-center items-center '>
                            <RiPhoneFill/>


                        </div>

                        <div className='text-left'>
                            <div className='text-2xl font-bold'>0987 654 897</div>
                            <div>Call Us Anytime</div>

                        </div>

                        
                
                    </div>
                    {/* btn */}

                    <button className='btn btn-primary mt-6'>
                            Get free estimation
                            <RiArrowRightLine className='text-accent'/>
                        </button>
                    </div>
                <div className='about__img max-w-[453px] order-1 xl:order-none mx-auto xl:max-w-none xl:mx-0'>
                    <Image
                    src="/assets/about/img.png"
                    alt="about"
                    priority
                    width={453}
                    height={453}
                    className=''
                    >
                    </Image>
                </div>

            </div>

            

        </div>

    </section>
  )
}

export default About;