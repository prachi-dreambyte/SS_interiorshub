"use client";
import { useEffect } from "react";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import About from "../components/About";
import Features from "../components/Features";
import Counter from "../components/Counter";
import Process from "../components/Process";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import Sponsor from "../components/Sponsor";
// import Panorama from "../components/Panorama";
// import Team from "../components/Team";
import Video from "../components/Video";
// import Blog from "../components/Blog";
import Gallery from "../components/Gallery";
// import Newsletter from "../components/Newsletter";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ImageScroller from "@/components/imageScroll";
import Products from "../components/Products";

export default function Home() {
  useEffect(() => {
    // If there is any logic that needs to run after Next.js hydration finishes
    if (typeof window !== "undefined" && window.jQuery) {
        window.dispatchEvent(new Event('resize'));
    }
  }, []);

  return (
    <>
      <Preloader />
      <Header />
      
      <div id="antra-smooth-wrapper" suppressHydrationWarning>
          <div id="antra-smooth-content" suppressHydrationWarning>
              <HeroSlider />
              <Counter />
              <Services />
              <About />
              <Features />              
              <Products />
              <ImageScroller />
              <Process />
              <Projects />
              <Testimonial />
              <Sponsor />
              {/* <Panorama /> */}
              {/* <Team /> */}
              <Video />
              {/* <Blog /> */}
              <Gallery />
              {/* <Newsletter /> */}
              <Footer />
          </div>
      </div>
    </>
  );
}
