"use client";
import Link from "next/link";
import React from "react";

function DesignerHover({ show, onEnter, onLeave }) {
  if (!show) return null;
  return (
    <div className="main">
      <div
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className=" absolute top-[88px] left-0 w-full bg-white z-50 shadow-md megamenu-wrapper pr-[80px] pl-[40px] border-t-1 border-[#c6c6c6] flex justify-between"
      >
        <div className="left-hover pt-[64px] pb-[48px]">
          <p className="font-bold text-lg mb-4">Most Popular</p>
          <div className="flex gap ">
            <div>
              <ul className="space-y-2 text-sm text-gray-700 w-fit">
                <li className="hover:underline cursor-pointer">Acne Studios</li>
                <li className="hover:underline cursor-pointer">
                  Alexander McQueen
                </li>
                <li className="hover:underline cursor-pointer">AllSaints</li>
                <li className="hover:underline cursor-pointer">Balenciaga</li>
                <li className="hover:underline cursor-pointer">BAPE</li>
                <li className="hover:underline cursor-pointer">Burberry</li>
                <li className="hover:underline cursor-pointer">
                  Comme des Garçons
                </li>
                <li className="hover:underline cursor-pointer">Corteiz</li>
              </ul>
            </div>

            {/* Column 2 - All Brands */}
            <div className=" pl-[80px]">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="hover:underline cursor-pointer">Dior</li>
                <li className="hover:underline cursor-pointer">Fendi</li>
                <li className="hover:underline cursor-pointer">Fear of God</li>
                <li className="hover:underline cursor-pointer">Gucci</li>
                <li className="hover:underline cursor-pointer">Hugo Boss</li>
                <li className="hover:underline cursor-pointer">Kenzo</li>
                <li className="hover:underline cursor-pointer">LOEWE</li>
                <li className="hover:underline cursor-pointer">
                  Louis Vuitton
                </li>
              </ul>
            </div>

            <div className=" pl-[80px]">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="hover:underline cursor-pointer">
                  Maison Margiela
                </li>
                <li className="hover:underline cursor-pointer">Moncler</li>
                <li className="hover:underline cursor-pointer">Nike</li>
                <li className="hover:underline cursor-pointer">Off-White</li>
                <li className="hover:underline cursor-pointer">Palm Angels</li>
                <li className="hover:underline cursor-pointer">Rick Owens</li>
              </ul>
              <div className="all_links">
                <Link href="/" className="">
                  <li className="pt-[30px]"> All Designer </li>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="right-hover-image pt-[48px] pb-[64px] pl-[80px] border-l-1 border-[#c6c6c6]">
          <h6 className="pb-[20px]"> NEW IN</h6>

          <div className="img-box-flex flex ">
            <div className="images-box bg-[url('../../public/images/h_pro_img_1.jpg')]  w-[164px] h-[198px]"></div>
            <div className="images-box bg-[url('../../public/images/h_pro_img_2.jpg')]   w-[164px] h-[198px] ml-[16px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignerHover;
