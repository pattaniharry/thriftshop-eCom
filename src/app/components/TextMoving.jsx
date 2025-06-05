import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Marquee from "react-fast-marquee";
import { DMseri } from "./HeroSection";

export default function () {
  return (
    <div className="main-tms">
      <div
        className={`TextMovingSection bg-[url('../../public/images/textmoving_bg.jpg')] h-[440px] width-[100%] relative flex items-center bg-cover bg-center ${DMseri.className} `}
      >
        <div className="movingtextslider text-white width-[100%] bg-none ">
          <Marquee autoFill="true">
            <h1 className="text-[62px]">
              {" "}
              Lets Share Our Closets &nbsp;&nbsp;•&nbsp; &nbsp;{" "}
            </h1>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
