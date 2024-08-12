"use client";

import React, { useState } from "react";
import { TextGenerateEffect } from "./ui/text-generate";
import { FlipWords } from "./ui/flip-words";
import Lottie from "react-lottie";
import animationData from "../Data/confetti.json";
import classNames from "classnames";

function Hero() {
  const [copied, setCopied] = useState(false);
  const [contactText, setContactText] = useState("Contact Us");

  const handleCopy = () => {
    navigator.clipboard.writeText("(415) 573-3098");
    setContactText("Phone Number Copied");
    setCopied(true);
    setTimeout(() => {
      setContactText("Contact Us");
      setCopied(false);
    }, 10000);
  };

  const description =
    "A buyer agent that makes offers, schedules tours, gets market analysis, and summarizes home information.";
  const flippingWords = [
    "Assistant",
    "Advisor",
    "Expert",
    "Strategist",
    "Mentor",
  ];

  return (
    <div className="w-full h-[80vh] mb-2 py-8 md:px-12 flex flex-col-reverse md:flex-row items-center justify-center">
      <div className="w-full max-h-fit md:min-w-[60%] flex flex-col p-3">
        <h1 className="text-[2.8rem] text-center font-extrabold">
          Your Personal Real Estate <br />
          <span className="text-blue-300">
            <FlipWords words={flippingWords} />
          </span>
        </h1>
        <h3 className="text-[1.5rem] text-center my-5 font-medium">
          <TextGenerateEffect words={description} />
        </h3>
        <div className="w-full flex items-center justify-center gap-10">
          <a
            href="https://www.modernrealty.io/homes"
            className="w-fit flex items-center justify-center my-5"
          >
            <button className="p-[3px] relative transition-all ease-out duration-200 active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-600 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent font-semibold hover:text-black">
                Get Started
              </div>
            </button>
          </a>
          <div className="text-[1rem] rounded-lg hover:text-[0.9rem] duration-150 ease-out transition-all relative">
            <div className="absolute w-fit h-fit -mt-3">
              <Lottie
                options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidyMid slice",
                  },
                }}
              />
            </div>
            <div className="text-[1rem] hover:text-[0.9rem] duration-150 ease-out transition-all relative">
              <button
                className={classNames(
                  "rounded-xl py-2 px-5 transition-all ease-out duration-150",
                  {
                    "text-orange-200 border-2 border-orange-300": copied,
                    "text-white": !copied,
                  }
                )}
                onClick={handleCopy}
              >
                {contactText}
              </button>
            </div>
          </div>
        </div>
        <div className="w-full py-5 mt-3 flex items-center justify-center">
          <img
            className="object-contain object-center w-[10rem] h-[5rem]"
            src="/ycback.svg"
            alt="Your Company Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
