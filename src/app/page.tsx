"use client";

import React, { useEffect, useRef } from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Faq from "./Components/Faq";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Page() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subtle parallax effect for the entire page
    const handleScroll = () => {
      if (pageRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.1; // Very subtle parallax
        gsap.to(pageRef.current, {
          y: rate,
          duration: 0.1,
        });
      }
    };

    // Smooth scroll behavior
    const smoothScroll = (e: any) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Add smooth scroll to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener("click", smoothScroll);
    });

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      anchorLinks.forEach(link => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    <div 
      ref={pageRef}
      className="bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-x-hidden"
    >
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Faq />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default Page;
