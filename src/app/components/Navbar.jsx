"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Home from "../page";
import localFont from "next/font/local";
import { useRef } from "react";
import DesignerHover from "./DesingerHover";

export const inter = localFont({
  src: [
    {
      path: "../../../public/fonts/Inter-Regular.woff",
    },
  ],
});

function Navbar() {
  // useEffect(() => {
  //     const handleScroll = () => {
  //     if (!ref.current) return;

  //     if (window.scrollY > 5) {
  //       ref.current.style.position = 'fixed';
  //     } else {
  //       ref.current.style.position = 'relative';
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup listener on unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const [items, setItems] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef();

  return (
    <div>
      <div className="fixed-nav w-[100%] height-[88px] ">
        <div
          ref={ref}
          className="nav py-[30px] pr-[32px] pl-[40px] flex justify-between items-center fixed top-[0px] bg-[white] z-[100] w-[100%] "
        >
          <div className="left-side-nav">
            <ul className="flex  items-center">
              <li className={`mr-[32px] ${inter.className}  `}>
                <Link href="shop"> Shop</Link>
              </li>
              <li className={`mr-[32px] ${inter.className}  `}>
                {" "}
                <Link href="Home"> New</Link>
              </li>
              <div
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <li className={`mr-[32px] ${inter.className}  `}>
                  <Link href="Home"> Designers</Link>
                </li>
              </div>
              <DesignerHover
                show={showDropdown}
                onEnter={() => setShowDropdown(true)}
                onLeave={() => setShowDropdown(false)}
              />
              <li className={`mr-[32px] ${inter.className}  `}>
                <Link href="Home"> Sale</Link>
              </li>
            </ul>
          </div>

          <div className="logo">
            <Link href="/">
              <img src="/images/logo.svg" alt="logo" />
            </Link>
          </div>

          <div className="right-side-nav flex items-center">
            <div
              className={`mr-[32px] ${inter.className} font-sans  sell-your-item`}
            >
              <ul>
                <li>
                  <Link href="#"> Sell your items </Link>{" "}
                </li>
              </ul>
            </div>
            <div className="rr-link-box ">
              <ul className="flex  border-l-1 border-gray-200 items-center">
                <li>
                  <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.207"
                      height="20.207"
                      viewBox="0 0 20.207 20.207"
                      className="ml-[32px]"
                    >
                      <g id="zoom-out" transform="translate(0.5 0.5)">
                        <path
                          id="Path"
                          d="M6.344,6.344,0,0"
                          transform="translate(12.656 12.656)"
                          fill="none"
                          stroke="#111"
                          strokeLinecap="square"
                          strokeMiterlimit="10"
                          strokeWidth="1"
                        />
                        <circle
                          id="Oval"
                          cx="7"
                          cy="7"
                          r="7"
                          fill="none"
                          stroke="#111"
                          strokeLinecap="square"
                          strokeMiterlimit="10"
                          strokeWidth="1"
                        />
                      </g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      className="ml-[32px]"
                    >
                      <g id="single-03" transform="translate(0.5 0.5)">
                        <path
                          id="Path"
                          d="M0,10C0,4.477,4.07,0,9.091,0h1.818C15.93,0,20,4.477,20,10Z"
                          transform="translate(0 10)"
                          fill="none"
                          stroke="#111"
                          strokeLinecap="square"
                          strokeMiterlimit="10"
                          strokeWidth="1"
                        />
                        <circle
                          id="Oval"
                          cx="5"
                          cy="5"
                          r="5"
                          transform="translate(5)"
                          fill="none"
                          stroke="#111"
                          strokeLinecap="square"
                          strokeMiterlimit="10"
                          strokeWidth="1"
                        />
                      </g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex gap-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="23"
                      viewBox="0 0 19 23"
                      className="ml-[32px]"
                    >
                      <g id="bag-20" transform="translate(0.5 0.5)">
                        <path
                          id="Path"
                          d="M18,17H0V0H18Z"
                          transform="translate(0 5)"
                          fill="none"
                          stroke="#111"
                          strokeLinecap="square"
                          strokeMiterlimit="10"
                          strokeWidth="1"
                        />
                        <path
                          id="Path-2"
                          data-name="Path"
                          d="M0,8V4A4.012,4.012,0,0,1,4,0H4A4.012,4.012,0,0,1,8,4V8"
                          transform="translate(5)"
                          fill="none"
                          stroke="#111"
                          strokeLinecap="square"
                          strokeMiterlimit="10"
                          strokeWidth="1"
                        />
                      </g>
                    </svg>
                    <p className="text-[15px]">({items})</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
