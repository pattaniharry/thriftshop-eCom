'use client'

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { DMseri } from './HeroSection';
import Script from 'next/script';




function OurCategory() {

  
  const images = [{
    id:1,
    src :  "images/shopby_img_1.jpg",
    name : "clothing"
  },
  {
    id : 2 ,
    src :  "images/shopby_img_2.jpg",
    name : "bags"
  },
  {
    
    id :3,
   src :  "images/shopby_img_3.jpg",
    name : "shoes"
  },
  {
    id : 4 ,
    src :  "images/shopby_img_4.jpg",
    name : "accesories"
  },
  {
    id : 5 ,
    src :  "images/shopby_img_1.jpg",
    name : "clothing"
  },
  {
    id: 6,
    src :  "images/shopby_img_2.jpg",
    name : "bags"
  },
  {
    id : 7 ,
    src :  "images/shopby_img_3.jpg",
    name : "shoes"
  },
  {
    id : 8 ,
    src :  "images/shopby_img_4.jpg",
    name : "accesories"
  }
  ];

  const prevRef = useRef(null); 
  const nextRef = useRef(null); 

  return (
    <div className="OurCategory pt-[110px] pb-[120px]">
      <div className="container">
        <div className="section-heading flex w-full justify-between">
          <div className="heading-text">
            <h2 className={`${DMseri.className}`}>Shop by category</h2>
          </div>
          <div className="arrows relative flex gap-2">
            <button className="cursor-pointer border-1  w-[38px] h-[38px] ml-[18px] flex justify-center items-center rounded-full " ref={prevRef}>
              <svg xmlns="http://www.w3.org/2000/svg" width="8.414" height="14.828" viewBox="0 0 8.414 14.828">
  <path id="Path" d="M0,0-6-6l-6,6" transform="translate(7 1.414) rotate(-90)" fill="none" stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
</svg>
</button>
            <button className=" cursor-pointer border-1  w-[38px] h-[38px] ml-[18px] flex justify-center items-center rounded-full " ref={nextRef}>
              <svg xmlns="http://www.w3.org/2000/svg" width="8.414" height="14.828" viewBox="0 0 8.414 14.828">
  <path id="Path" d="M0,0,6-6l6,6" transform="translate(1.414 1.414) rotate(90)" fill="none" stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
</svg>

            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          loop={false}
          pagination={{ clickable: true }}
          slidesPerView={4}
          spaceBetween={30}
          onInit={(swiper) => {
            if (!swiper.params.navigation) return;
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="main-slider mt-8"
        > 
          {images.map((items) => (
            <SwiperSlide key={items.index} className="" >
              <img className='bg-no-repeat bg-cover relative imagebox' src={items.src} alt={`Shop category ${items.index + 1}`} />
              <div className="btnbox absolute bottom-[28px] w-[100%] flex justify-center items-center">
              <button className='primary-btn-white '>
                <Link href='/' className="h-[52px] block leading-[50px]" > {items.name} </Link></button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default OurCategory;
