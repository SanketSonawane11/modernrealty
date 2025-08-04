import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import content from "../Data/Services";

function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            A Buyer Realtor Replacement
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl text-transparent bg-gradient-to-r from-orange-100 via-orange-500 to-orange-800 bg-clip-text font-medium max-w-4xl mx-auto leading-relaxed">
            Access our services online or simply text us at (415) 573-3098.
          </h3>
        </div>
        
        <div className="w-full">
          <StickyScroll content={content} />
        </div>
      </div>
    </section>
  );
}

export default Services;
