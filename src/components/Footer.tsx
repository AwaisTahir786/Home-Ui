
import React, { useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { RiFacebookBoxFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill } from '@remixicon/react';

function SocialLinks({data,link}:any) {
    return(
      
            <li>
                <Link href={link} className='hover:text-accent'>
                {data}
                </Link>
            </li>
        
    )
    
}

function FooterItem({title,f_data1,f_data2,f_data3,f_data4,f_data5}:any){
   return(
    <div className='footer__item'>
    <h3 className='h3 mb-3'>{title}</h3>
    <ul className='flex flex-col gap-4'>
    <SocialLinks link="/" data={f_data1} />
    <SocialLinks link="/" data={f_data2} />
    <SocialLinks link="/" data={f_data3} />
    <SocialLinks link="/" data={f_data4} />
    <SocialLinks link="/" data={f_data5} />



</ul>
</div>

   )
}

function Footer() {
    

  return (
    <footer className='footer mt-[80px] xl:mt-[150px] relative z-20'>
        <div className='container mx-auto px-0'>
            <div className='flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px]'>
                {/* item 2 */}
                <div className='footer__item w-full max-w-[400px] mx-auto mb-8 text-center xl:text-left '>
                    <Link href={"/"} className='flex justify-center xl:justify-start mb-8'>
                        <Image src="assets/logo.svg" alt="logo" width={100} height={100} />
                    </Link>
                    <p className='mb-8 text-xl'>
                        It is a long establised fact that a reader will be distracted lookings.
                    </p>
                    <ul className='flex justify-center text-primary gap-[54px] xl:justify-start'>
                        <SocialLinks data={<RiFacebookBoxFill/>} link="/"/>
                        <SocialLinks data={<RiTwitterFill/>} link="/"/>
                        <SocialLinks data={<RiLinkedinFill/>} link="/"/>
                        <SocialLinks data={<RiInstagramFill/>} link="/"/>

                    </ul>

                </div>

                <div className='flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end '>
                        
                        {/* footer item 1 */}  
                            <FooterItem  title="Pages" f_data="About Us" f_data2="Testimonials" f_data3="Our Work" f_data4="News" f_data5="Contact"/>
                        {/* footer item 2 */}  
                        <FooterItem title="Services" f_data="Kitchen" f_data2="Living Area" f_data3="Bath Room" f_data4="Bed Room" />
                        {/* footer item 3 */} 
                        <div className='footer__item max-w-[260px] mx-auto xl:mx-0'>
                            <h3 className='h3 mb-3'>Contact</h3>
                            <div className='flex flex-col gap-6 text-[20px]'>
                                <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
                                <p>contact@interno.com</p>
                                <p>(123) 456 - 7890</p>
                            </div>

                        </div>

                            
                </div>

            </div>

        </div>
        <p className='footer__copyright text-center text-lg py-10 bg-white xl:border-t'>Copyright &copy; Interno 2024. All rights reserved.</p>

    </footer>
  )
}

export default Footer;