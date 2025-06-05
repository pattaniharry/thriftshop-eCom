import React from "react";

import { DMseri } from "./HeroSection";
import { inter } from "./Navbar";

function AboutUs() {
  return (
    <div>
      <div className="main pb-[113px]">
        <div className="container">
          <div className="about-us-wrapper flex py-[72px]  bg-white  ">
            <div className="StartSelling_block border-r-1 border-[#e2e2e2] ">
              <h3 className={`${DMseri.className}`}>How selling works</h3>
              <p className={`${inter.className}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam.
              </p>
              <button className="primary-btn-black"> Learn More</button>
            </div>
            <div className="StartSelling_block ">
              <h3 className={`${DMseri.className}`}>Start Selling </h3>
              <p className={`${inter.className}`}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <button className="primary-btn-black"> Get started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
