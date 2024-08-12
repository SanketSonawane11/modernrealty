import React from "react";
import { TextGenerateEffect } from "./ui/text-generate";
import { FlipWords } from "./ui/flip-words";

function Hero() {
  const desc =
    "A buyer agent that makes offers, schedules tours, gets market analysis, and summarizes home information.";

  const flipping = ["Assistant", "Advisor", "Expert", "Strategist", "Mentor"];
  return (
    <div className=" w-full h-[80vh] py-8 md:px-12 flex flex-col-reverse md:flex-row items-center justify-center">
      <div className="w-full max-h-fit md:min-w-[60%] flex justify-between flex-col p-3">
        <h1 className="text-[2.8rem] text-center font-extrabold ">
          Your Personal Real Estate <br />
          <span className="text-blue-300">
            <FlipWords words={flipping} />
          </span>
        </h1>
        <h3 className="text-[1.5rem] text-center my-5  font-medium">
          <TextGenerateEffect words={desc} />
        </h3>
        <a
          href="https://www.modernrealty.io/homes"
          className="w-full flex items-center justify-center my-5"
        >
          <button className="p-[3px] relative transition-all ease-out duration-200 active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-600 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent font-semibold hover:text-black">
              Get Started
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
