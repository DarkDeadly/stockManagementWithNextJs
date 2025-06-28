"use client"
import { useEffect } from "react";
import Features from "./_components/Features";
import Footer from "./_components/Footer";
import Guide from "./_components/Guide";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Prices from "./_components/Prices";
import AOS from "aos"
import "aos/dist/aos.css"
export default function Home() {
   useEffect(() => {
     AOS.init({
          duration: 1200,
          once: false,
        })
  }, [])
  return (
    <div className="w-full ">
      <Header/>
      <Hero/>
      <Features/>
      <Guide/>
      <Prices/>
      <Footer/>
      
    </div>
  );
}
