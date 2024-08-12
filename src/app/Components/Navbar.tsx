"use client";

import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../Data/confetti.json";

function Navbar() {
  const [showMenu, setshowMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [Contacttext, setContacttext] = useState("Contact Us");

  const handleCopy = () => {
    navigator.clipboard.writeText("(415) 573-3098");
    setContacttext("Phone Number Copied");
    setCopied(true);
    setTimeout(() => {
      setContacttext("Contact Us");
      setCopied(false);
    }, 10000);
  };
  return (
    <div className="w-full max-h-[6rem] md:max-h-[7rem] flex items-center justify-center">
      <div className="flex py-8 justify-between px-4 shadow-md w-[90%]">
        <div className="text-2xl font-extrabold text-center md:text-left md:text-4xl text-white">
          <img src="/Logo.png" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-white">
          <div className="text-[1rem] hover:text-[0.9rem] duration-150 ease-out transition-all relative">
            <div className="absolute w-full h-full -mt-3">
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
              className={
                copied
                  ? "text-orange-200 border-2 border-orange-300 rounded-xl py-2 px-5 transition-all ease-out duration-150"
                  : "text-white"
              }
              onClick={handleCopy}
            >
              {Contacttext}
            </button>
          </div>

          <button className="px-8 py-2 bg-orange-500 rounded-lg hover:bg-transparent hover:border-2 border-orange-500 hover:scale-105 hover:rounded-lg transition-all ease-out duration-200 hover:text-white">
            Get Started
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            className="w-10 h-10"
            onClick={() => {
              setshowMenu(!showMenu);
            }}
          >
            <svg
              fill="white"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              className="text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {showMenu && (
        <div className="absolute top-16 right-4 bg-white rounded-lg shadow-lg py-4 px-6 z-50">
          <h3 className="mb-3 text-lg text-center font-bold uppercase tracking-widest">
            Menu
          </h3>
          <hr />
          <ul className="flex flex-col space-y-4 mt-4">
            <button>Contact us</button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
