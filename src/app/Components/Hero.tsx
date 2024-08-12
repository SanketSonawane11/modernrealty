import React from "react";
import { TextGenerateEffect } from "./ui/text-generate";
import { FlipWords } from "./ui/flip-words";

function Hero() {
  const desc =
    "A buyer agent that makes offers, schedules tours, gets market analysis, and summarizes home information.";

  const flipping = ["Assistant", "Advisor", "Expert", "Strategist", "Mentor"];
  return (
    <div className="w-full h-[80vh] p-8 flex flex-col-reverse md:flex-row items-center justify-center">
      <div className="w-full max-h-[60%] md:max-w-[50%] md:min-w-[60%] flex items-center justify-center flex-col p-3">
        <h1 className="text-[2.5rem] font-extrabold text-center ">
          Your Personal Real Estate{" "}
          <span className="text-blue-300">
            <FlipWords words={flipping} />
          </span>
        </h1>
        <h3 className="text-[1.5rem] my-5 text-center font-medium">
          <TextGenerateEffect words={desc} />
        </h3>
      </div>
      <div className="w-full hidden md:block max-h-[40%] md:max-w-[50%] py-5 px-8 md:h-full items-center justify-center">
        <img src="/Logo.png" />
      </div>
    </div>
  );
}

export default Hero;
