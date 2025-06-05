"use client";

import React, { useEffect, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";

function sliderSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div>
      <div className="prod-detail-pag pt-[148px]">
        <div className="container">
          <div className="header">
            <Link href="../">
              <div className="heading-section flex  ">
                <img
                  src="/images/angle-down.svg"
                  className="mr-[10px] rotate-90"
                />
                <p>Back to Overview</p>
              </div>
            </Link>
          </div>
          <div className="section-body mt-[32px] ">
            <div className="main-slider-details mb-[88px] flex">
              <div className="slider-section flex max-w-[600px] px-[15px]">
                <div className="thumbnails mx-[15px]">
                  <Swiper
                    modules={[Thumbs]}
                    watchSlidesProgress
                    onSwiper={setThumbsSwiper}
                    direction="vertical"
                  >
                    <SwiperSlide
                      onClick={() => setActiveIndex(0)}
                      className={`max-w-[68px] max-h-[88px] mb-[8px]  cursor-pointer
                                      ${
                                        activeIndex === 0
                                          ? "border-2  blur-0"
                                          : "opacity-[0.3]"
                                      } 
                                        transition duration-300 rounded `}
                    >
                      <img
                        src="/images/pro-slide1.jpg"
                        className="w-[100%] h-[100%]  "
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide
                      className={`max-w-[68px] max-h-[88px] mb-[8px]  cursor-pointer
                                      ${
                                        activeIndex === 0
                                          ? "border-2  blur-0"
                                          : "opacity-0.3 border-transparent"
                                      } 
                                        transition duration-300 rounded `}
                    >
                      <img
                        src="/images/pro-slide2.jpg"
                        alt=""
                        className="w-[100%] h-[100%]  "
                      />
                    </SwiperSlide>
                    <SwiperSlide
                      className={`max-w-[68px] max-h-[88px] mb-[8px]  cursor-pointer
                                      ${
                                        activeIndex === 0
                                          ? "border-2  blur-0"
                                          : "opacity-[0.3]"
                                      } 
                                        transition duration-300 rounded `}
                    >
                      <img
                        src="/images/pro-slide3.jpg"
                        alt=""
                        className="w-[100%] h-[100%] "
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>

                <Swiper
                  className=" w-[100%] relative "
                  modules={[Thumbs]}
                  spaceBetween={50}
                  slidesPerView={1}
                  speed={1000}
                  thumbs={{ swiper: thumbsSwiper }}
                >
                  <SwiperSlide>
                    <img src="/images/pro-slide1.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/pro-slide2.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/images/pro-slide3.jpg" alt="" />
                  </SwiperSlide>
                </Swiper>

                <div className="arrows">
                  <div className="left-arrow">
                    <button></button>
                  </div>
                  <div className="right-arrow">
                    <button></button>
                  </div>
                </div>
              </div>
              <div className="slider-product-detail max-w-[600px] px-[15px]">
                <div className="product_info">
                  <div className="product-info-compacted max-w-[512px]">
                    <div className="pro-name">
                      <h6 className="mb-[8px] ">Gucci Belt</h6>
                      <p className="mb-[20px]">
                        Leather belt with silver Gucci buckle
                      </p>
                      <span className="price">€ 109</span>
                    </div>
                    <div className="pro-desc pt-[20px] pb-[48px] mt-[32px] mb-[40px] border-t-1 border-[#D6D6D6] border-b-1">
                      <p>
                        <span>Condition:</span> Very good condition
                      </p>
                      <p>
                        <span>Colour:</span> White
                      </p>
                      <p className="">
                        <span>EU Size:</span> S
                      </p>
                      <div className="add-to-cart primary-btn-black max-w-[277px] min-w-[277px] mt-[40px]">
                        <a className=" " href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <div className="pro-policy">
                      <TabGroup>
                        <TabList>
                          <Tab className="tabs"> Shipping</Tab>
                          <Tab> Returns</Tab>
                        </TabList>
                        <TabPanels>
                          <TabPanel>
                            <p>
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa.
                            </p>
                          </TabPanel>
                          <TabPanel>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                          </TabPanel>
                        </TabPanels>
                      </TabGroup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default sliderSection;
