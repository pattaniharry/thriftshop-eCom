'use client'

import AboutUs from "./components/AboutUs";
import FollowUs from "./components/FollowUs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NewIn from "./components/NewIn";
import OurCategory from "./components/OurCategory";
import TextMoving from "./components/TextMoving";
 
import "./globals.css";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <OurCategory/>
      <NewIn/>
      <AboutUs/>
      <FollowUs/>
      <TextMoving/>

    </div>
  );
}
