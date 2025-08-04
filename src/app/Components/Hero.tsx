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
    }, 3000);
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
    <section className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Your Personal Real Estate{" "}
              <span className="text-blue-300 block sm:inline">
                <FlipWords words={flippingWords} />
              </span>
            </h1>
            
            <h3 className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              <TextGenerateEffect words={description} />
            </h3>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8">
              <a
                href="https://www.modernrealty.io/homes"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto p-[3px] relative transition-all ease-out duration-200 active:scale-95 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-600 rounded-lg" />
                  <div className="px-8 py-3 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent font-semibold hover:text-black">
                    Get Started
                  </div>
                </button>
              </a>
              
              <div className="relative">
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
                <button
                  className={classNames(
                    "w-full sm:w-auto rounded-xl py-3 px-6 transition-all ease-out duration-200 border-2",
                    {
                      "text-orange-200 border-orange-300": copied,
                      "text-white border-white hover:border-orange-300 hover:text-orange-300": !copied,
                    }
                  )}
                  onClick={handleCopy}
                >
                  {contactText}
                </button>
              </div>
            </div>
            
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <img
                className="h-12 sm:h-16 w-auto opacity-80"
                src="/ycback.svg"
                alt="Your Company Logo"
              />
            </div>
          </div>
          
          {/* Optional: Add an image or illustration on larger screens */}
          <div className="hidden lg:block flex-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-full blur-3xl" />
              <div className="relative bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="text-center text-white/60">
                  <div className="text-6xl mb-4">🏠</div>
                  <p className="text-lg font-medium">Modern Real Estate Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
