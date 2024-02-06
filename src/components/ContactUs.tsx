
import { RiArrowRightLine } from '@remixicon/react';
import React from "react";
function ContactUs() {



  return (
    <section className='contact mt-[80px] xl:mt-[150px] relative z-20 py-[80px] xl:py-[150px]'>
    <div className='contact__container container mx-auto bg-primary rounded-[70px] py-[80px]'>

        <div className='contact__text max-w-[640px] mx-auto text-center'>
            <h2 className='h2 text-white mb-4'>Do you want to join Interno?</h2>
            <p className='text-white mb-8 max-w-sm xl:max-w-none mx-auto '>It is a long established fact will be distracted.</p>
            <button className='btn btn-accent mx-auto'>
                Connect with us <RiArrowRightLine  className='text-primary' />
            </button>

        </div>
        </div>
    </section>
  )
}

export default ContactUs;