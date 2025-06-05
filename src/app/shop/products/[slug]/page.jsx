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
import SliderSection from "./components/sliderSection";
import YouMayAlsoLike from "./components/YouMayAlsoLike";

function page() {
  return (
    <>
      <SliderSection />;
      <YouMayAlsoLike />
    </>
  );
}

export default page;
