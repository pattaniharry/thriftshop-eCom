'use client';

import React, { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { DMseri } from '../components/HeroSection'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { interSM } from '../components/HeroSection';
import { inter } from '../components/Navbar';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

const accesoriesArr = [{id:1, name:"Accesories"},{id:2,name:"Bags"},{id:3,name:"Clothing"},
                       {id:4,name:"Jewellery"},{id:5,name:"Shoes"},{id:6,name:"New in"},{id:7,name:"Sale"}]

const colourArr = [{id:1,name:"Beige"},{id:2,name:"Black"},{id:3,name:"Blue"},{id:4,name:"Brown"},{id:5,name:"Grey"},
                   {id:6,name:"Red"},{id:7,name:"Green"}]

 const images = [{id:1,src:"images/h_pro_img_1.jpg",isAvail : true,name:"Gucci bag ",price : 249},
{
    id:2,
    src:"images/h_pro_img_2.jpg",
    isAvail : false ,
    name:"Ivy & Oak Set ",
    price : 255  
  },
{
    id:3,
    src:"images/h_pro_img_3.jpg",
    isAvail : true,
    name:"Ivy & Oak Set ",
    price : 69
  },
{
    id:4,
    src:"images/h_pro_img_4.jpg",
    isAvail : true,
    name:"Ivy & Oak Set ",
    price : 189
  },
{
    id:5,
    src:"images/h_pro_img_2.jpg",
    isAvail : true,
    name:"Ivy & Oak Set ",
    price : 255
  },
{
    id:6,
    src:"images/h_pro_img_3.jpg",
    isAvail : true,
    name:"Ivy & Oak Set ",
    price : 69
  },
{
    id:7,
    src:"images/h_pro_img_4.jpg",
    isAvail :true,
    name:"Ivy & Oak Set ",
    price : 329
  },
{
    id:8,
    src:"images/h_pro_img_1.jpg",
    isAvail : false,
    name:"Ivy & Oak Set ",
    price : 329
  },]

const forsizeArr = [];
let first_linear_size = 25;
let last_linear_size = 29; 



function page() {

  const[isHovered,setIsHovered] = useState(false);

  return (
    <div>

        <div className="main pt-[100px]">
            <div className="container">
                    <div className="shop mt-[52px] ">
                <div className="section-heading flex justify-between items-center pb-[24px] border-b-1 border-[#D6D6D6] ">
                    <p  className={`${DMseri.className} text-[48px]`}> Shop </p>
                    <div className="drop-down">
                         <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className={`inline-flex w-full justify-centerpx-3 py-2 text-gray-900 text-[15px] focus:outline-none ${inter.className} h-[25px] leading-[25px] flex items-center justify-betwen`}>
         <p className='pr-[18px] capitalize'> sort by </p> 
         <img src="images/angle-down.svg" alt="" />
          
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Featured
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Price High to Low
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Price Low to High
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button 
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Newest First 
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
                    </div>
                </div>

<div className="section-body flex mt-[40px]" >
<div className="filter-side-size-stitch w-[100%] max-w-[250px] max-h-[360px] mx-[26px]">
<div className="filter-side   ">

<div className="accordian ">
        <Accordion  allowMultiple transition transitionTimeout={250}     >
       <AccordionItem
       
        header={
          <div className='flex justify-between max-w-[100%] w-[250px] mb-[25px] max-h-[250px] overflowY-scroll '>
            <p className={`text-[18px] categories-accordian ${interSM.className}`}>Categories </p>
            <img src="images/angle-down.svg" alt="" />
          </div>
        }
      >
        
       {accesoriesArr.map((items) => (
          <label key={items.id} className={`containerCB ${inter.className}  text-[#323232] text-[15px]`}>{items.name}
            <input type="checkbox"  />
             <span className="checkmark"></span>
          </label>
        ))}

      </AccordionItem>

      <AccordionItem
        header={
          <div className='flex justify-between max-w-[100%] w-[250px] mb-[25px]'>
             <p className={`text-[18px] categories-accordian  ${interSM.className}`}>Colour </p>
            <img src="images/angle-down.svg" alt="" />
          </div>
        }
      >
              {colourArr.map((items) => (
          <label key={items.id} className={`containerCB ${inter.className}  text-[#323232]`}>{items.name}
            <input type="checkbox" />
             <span className="checkmark"></span>
          </label>
        ))}
       
      </AccordionItem>

       <AccordionItem
        header={
           <div className='flex justify-between max-w-[100%] w-[250px] mb-[25px]'>
             <p className={`text-[18px] categories-accordian ${interSM.className}`}>International Size </p>
            <img src="images/angle-down.svg" alt="" />
          </div>
        }
      >
        {forsizeArr.map((size) => (
         <label key={size}>
         <input type="checkbox" value={size} />
         <span className="ml-2">{size}</span>
          </label>
))
}
          
       
      </AccordionItem>
    </Accordion>
</div>
</div>
</div>

<div className="images-side  ">
<div className="filter-text mb-[24px] flex items-center ml-[19px] gap-[4px] "  >

<button className='flex items-center cursor-pointer bg-black text-white px-[6px] py-[4px]   '>
    <img src="images/close_icon.svg" className='mr-[8px]' alt="" />
    <p> Bags</p>
    </button>
<button className='flex items-center cursor-pointer bg-black text-white px-[6px] py-[4px]'>
     <img src="images/close_icon.svg" className='mr-[8px]' alt="" />
    <p> Acne Studios</p>
</button>
<button className='flex items-center cursor-pointer bg-black text-white  px-[6px] py-[4px] '> 
    <img src="images/close_icon.svg" className='mr-[8px]' alt="" />
    <p> XS</p>
    </button>

<p className={`text-[#7e7e7e] underline ml-[13px] text-[14px] ${inter.className} cursor-pointer`}> Clear all filters  </p>

</div>

<div className="main-images flex flex-wrap  mb-[40px] ">
{images.map((items) => (
                    <Link href="/" key={items.id}>
                    <div className="product-div px-[13px] mb-[46px] "
                  onMouseEnter={() => setIsHovered(items.id)}
                onMouseLeave={() => setIsHovered(null)}

                    >                   
                    <div className="image-box-div  p-[6px]  " >
                      <div className="for-marquee relative w-[100%]">
                    <img  className=' w-[100%]  ' src={items.src} alt="" />
                     {!items.isAvail && isHovered === items.id && (
                   <div className="custom-marquee-container ">
                   <Marquee autoFill = {true}>
                    OOPS,SOLD!&nbsp; &nbsp; •&nbsp; &nbsp; 
                      </Marquee>
    </div>
      )}
                    </div>
                    </div>  
                    <div className="detail-div px-[10px] pt-[20px] pb-[18px]">
                      <p className={`text-[16px] leading-[1.5] text-[#202020]  ${inter.className} font-bold`}>{items.name}</p>
                      <p className='price-box'> € {items.price} </p>
                    </div>
                    </div>
                    </Link>
                   ))
                   }
</div>
</div>

</div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default page