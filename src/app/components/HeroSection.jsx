'use client'

import React, { useEffect, useRef } from 'react'
import localFont from 'next/font/local';
import Link from 'next/link';

export const interSM = localFont({
  src: [
    {
      path: '../../../public/fonts/Inter-SemiBold.woff'
    }
  ]
});

 export const DMseri = localFont({
      src: [
        {
          path: '../../../public/fonts/DMSerifText-Regular.woff'
          
        }
      ]
    });


function HeroSection() {

const ref = useRef();


//  useEffect(() => {
//      const handleScroll = () => {
//        if (!ref.current) return;
 
//        if (window.scrollY > 5) {
//          ref.current.style.paddingTop = '10px';
//        } else {
//          ref.current.style.paddingTop = 'none';
//        }
//      };
 
//      window.addEventListener('scroll', handleScroll);
 
//      // Cleanup listener on unmount
//      return () => {
//        window.removeEventListener('scroll', handleScroll);
//      };
//    }, []);
   
  return (
    <div>
        <div className="main w-[100%] relative ">
        <div  ref={ref} className=" image-box bg-[url('../../public/images/banner_image.jpg')]  bg-no-repeat w-[100%] h-[536px] bg-cover  bg-center">
        </div>
            <div className="heading absolute text-white top-[120px] w-[100%]  ">
        <div className="container px-[15px]  ">
            
            <div className="headline mx-[-15px]  ">
                <h1 className={`${DMseri.className} max-w-[50%] px-[15px] leading-[1.23]  pb-[40px] `}>Not your ordinary vintage store</h1>
            </div>
            <button  className='primary-btn-white'>
                  <Link href="/" className={` h-[52px] block leading-[50px] ${interSM.className}  `}>Shop now </Link> 
            </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection