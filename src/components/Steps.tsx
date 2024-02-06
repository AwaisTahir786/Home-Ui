import { RiArrowRightLine, RiCompasses2Line, RiMagicLine, RiTodoLine, RiToolsLine } from '@remixicon/react';
import Link from 'next/link';
import React from "react";

function Steps() {
   
  return (
    <section className='steps mt-[80px] xl:mt-[200px] z-20 relative '>
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-12'>
                {/* step 1 */}
                <div className='steps__step text-center items-center flex flex-col justify-center'>
                    <div className='mb-4'>
                        <RiCompasses2Line size={36} className=' text-accent'/>
                    </div>
                    <h3 className='h3 mb-5'>Project Planning</h3>
                    <p className='mb-5 max-w-md mx-auto'>There are many variations of the passages of lorem Ipsum from avalible, majority</p>
                    <Link href="/" className='flex justify-center gap-2 font-medium hover:text-accent'>Read more <RiArrowRightLine/></Link>

                </div>


                {/* step 2 */}

                <div className='steps__step text-center items-center flex flex-col justify-center'>
                    <div className='mb-4'>
                        <RiMagicLine size={36} className=' text-accent'/>
                    </div>
                    <h3 className='h3 mb-5'>Gaining Materials</h3>
                    <p className='mb-5 max-w-md mx-auto'>There are many variations of the passages of lorem Ipsum from avalible, majority</p>
                    <Link href="/" className='flex justify-center gap-2 font-medium hover:text-accent'>Read more <RiArrowRightLine/></Link>

                </div>
                {/* step 3 */}

                <div className='steps__step text-center items-center flex flex-col justify-center'>
                    <div className='mb-4'>
                        <RiToolsLine size={36} className=' text-accent'/>
                    </div>
                    <h3 className='h3 mb-5'>Project Planning</h3>
                    <p className='mb-5 max-w-md mx-auto'>There are many variations of the passages of lorem Ipsum from avalible, majority</p>
                    <Link href="/" className='flex justify-center gap-2 font-medium hover:text-accent'>Read more <RiArrowRightLine/></Link>

                </div>

            </div>
        </div>
    </section>
  )
}

export default Steps;