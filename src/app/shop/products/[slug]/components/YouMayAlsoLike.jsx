import React, { useState } from "react";
import { DMseri } from "../../../../components/HeroSection";
import Link from "next/link";
import { inter } from "../../../../components/Navbar";
import Marquee from "react-fast-marquee";

function YouMayAlsoLike() {
  const [isHovered, setIsHovered] = useState(false);
  const images = [
    {
      id: 1,
      src: "/images/h_pro_img_1.jpg",
      isAvail: true,
      name: "Gucci bag ",
      price: 249,
    },
    {
      id: 2,
      src: "/images/h_pro_img_2.jpg",
      isAvail: false,
      name: "Ivy & Oak Set ",
      price: 255,
    },
    {
      id: 3,
      src: "/images/h_pro_img_3.jpg",
      isAvail: true,
      name: "Ivy & Oak Set ",
      price: 69,
    },
    {
      id: 4,
      src: "/images/h_pro_img_4.jpg",
      isAvail: true,
      name: "Ivy & Oak Set ",
      price: 189,
    },
    {
      id: 5,
      src: "/images/h_pro_img_2.jpg",
      isAvail: true,
      name: "Ivy & Oak Set ",
      price: 255,
    },
    {
      id: 6,
      src: "/images/h_pro_img_3.jpg",
      isAvail: true,
      name: "Ivy & Oak Set ",
      price: 69,
    },
    {
      id: 7,
      src: "/images/h_pro_img_4.jpg",
      isAvail: true,
      name: "Ivy & Oak Set ",
      price: 329,
    },
    {
      id: 8,
      src: "/images/h_pro_img_1.jpg",
      isAvail: false,
      name: "Ivy & Oak Set ",
      price: 329,
    },
  ];

  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="YMALsection">
            <div className="YMALSectionHead pt-[80px] mb-[25px] border-t-1 border-[#d6d6d6]">
              <h4 className="text-[32px] leading-[1.25]">You May Also Like</h4>
            </div>
            <div className="YMALSectionBody">
              <div className="Newin-body flex max-w[100%]  flex-wrap pt-[44px] ">
                {images.map((items) => (
                  <Link href="/" key={items.id}>
                    <div
                      className="product-div px-[13px] mb-[46px] "
                      onMouseEnter={() => setIsHovered(items.id)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <div className="image-box-div  p-[6px]  ">
                        <div className="for-marquee relative w-[100%]">
                          <img className=" w-[100%]  " src={items.src} alt="" />
                          {!items.isAvail && isHovered === items.id && (
                            <div className="custom-marquee-container ">
                              <Marquee autoFill={true}>
                                OOPS,SOLD!&nbsp; &nbsp; •&nbsp; &nbsp;
                              </Marquee>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="detail-div px-[10px] pt-[20px] pb-[18px]">
                        <p
                          className={`text-[16px] leading-[1.5] text-[#202020]  ${inter.className} font-bold`}
                        >
                          {items.name}
                        </p>
                        <p className="price-box"> € {items.price} </p>
                      </div>
                    </div>
                  </Link>
                ))}
                <div className="btnbox w-[100%] flex justify-center items-center">
                  <button className="primary-btn-black">
                    <Link href="/" className="h-[52px] block leading-[50px]">
                      {" "}
                      View All
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouMayAlsoLike;
