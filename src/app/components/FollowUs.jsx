"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { DMseri } from "./HeroSection";

function FollowUs() {
  const images = [
    {
      id: 1,
      src: "images/insta_img_1.jpg",
    },
    {
      id: 2,
      src: "images/insta_img_2.jpg",
    },
    {
      id: 3,
      src: "images/insta_img_3.jpg",
    },
    {
      id: 4,
      src: "images/insta_img_4.jpg",
    },
    {
      id: 5,
      src: "images/insta_img_5.jpg",
    },
    {
      id: 6,
      src: "images/insta_img_1.jpg",
    },
    {
      id: 7,
      src: "images/insta_img_2.jpg",
    },
    {
      id: 8,
      src: "images/insta_img_3.jpg",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="FollowUs-wrapper pb-[111px]">
            <div className="section-heading">
              <h3 className={`leading-[1.22] ${DMseri.className}`}>
                Follow us on instagram
              </h3>
            </div>
            <div className="section-body">
              <Swiper
                modules={[Navigation]}
                loop={false}
                pagination={{ clickable: true }}
                slidesPerView={5}
                spaceBetween={10}
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
                  <SwiperSlide
                    key={items.index}
                    className="w-[226px] mr-[10px]"
                  >
                    <img
                      className="bg-no-repeat bg-cover relative imagebox"
                      src={items.src}
                      alt={`Shop category ${items.index + 1}`}
                    />
                  </SwiperSlide>
                ))}

                <div className="link-and-arrows pt-[24px] flex justify-between items-center">
                  <Link href="/">
                    <div className="instagram-social flex ">
                      <img
                        src="images/insta_sm_icon.svg "
                        className="mr-[9px]"
                        alt=""
                      />
                      <p>@thriftshop_amsterdam</p>
                    </div>
                  </Link>
                  <div className="arrows relative flex gap-1 ">
                    <button
                      className="cursor-pointer border-1  w-[38px] h-[38px] ml-[18px] flex justify-center items-center rounded-full "
                      ref={prevRef}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8.414"
                        height="14.828"
                        viewBox="0 0 8.414 14.828"
                      >
                        <path
                          id="Path"
                          d="M0,0-6-6l-6,6"
                          transform="translate(7 1.414) rotate(-90)"
                          fill="none"
                          stroke="#111"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                    <button
                      className=" cursor-pointer border-1  w-[38px] h-[38px] ml-[18px] flex justify-center items-center rounded-full "
                      ref={nextRef}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8.414"
                        height="14.828"
                        viewBox="0 0 8.414 14.828"
                      >
                        <path
                          id="Path"
                          d="M0,0,6-6l6,6"
                          transform="translate(1.414 1.414) rotate(90)"
                          fill="none"
                          stroke="#111"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowUs;
