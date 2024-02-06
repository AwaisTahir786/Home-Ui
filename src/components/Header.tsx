"use client";

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { RiMenu4Line } from '@remixicon/react';
import Navlinks from './Navlinks';
import { Menu, X, ShoppingCart} from "lucide-react";


function Header() {

    const[isopen,setIsOpen]=useState(false)

    function toggleNavbar() {
        setIsOpen(!isopen)
        
    }


  return (
<header className='sticky h-[90px] top-0 shadow-xl z-30 bg-white'>
    <div className='container h-full items-center flex justify-between mx-auto'>
        <Link href={"/"}>
            <Image 
            src="/assets/logo.svg"
            alt='logo'
            width={200}
            height={200}
            >

            </Image>
        </Link>

        {/* navbar */}
        <nav className=''>

            {/* mobile trigger */}

            <div className='lg:hidden'>
            <button onClick={toggleNavbar} >{isopen ? <X /> : <RiMenu4Line/>}</button>

                
                {isopen && (
                    
                    <Navlinks styling="h-[350px] p-6 fixed w-full h-0 p-0 bg-white overflow-hidden top-[90px] left-0 right-0 border-t flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transtion-all duration-300"/>
                  

                )}
            </div>
           

            <Navlinks styling="fixed w-full h-0 p-0 bg-white overflow-hidden top-[90px] left-0 right-0 border-t flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transtion-all duration-300"/>
        </nav>
    </div>

</header>
  )
}

export default Header;