import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import content from "../Data/Services";

function Services() {
  return (
    <div className="w-full h-fit py-9 px-8 md:px-12 flex items-center justify-center">
      <div className="w-full flex items-center flex-col justify-center">
        <h2 className="text-[2rem] md:text-[2.5rem] text-white leading-10 text-center font-semibold">
          A Buyer Realtor Replacement
        </h2>
        <h5 className="text-[1.5rem] md:text-[2rem] text-center mb-8 text-transparent bg-gradient-to-r from-orange-100 via-orange-500 to-orange-800 bg-clip-text font-medium">
          Access our services online or simply text us at (415) 573-3098.
        </h5>
        <div className="w-full">
          <StickyScroll content={content} />
        </div>
      </div>
    </div>
  );
}

export default Services;
