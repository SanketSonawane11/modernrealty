"use client";

import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../Data/confetti.json";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contactText, setContactText] = useState("Contact Us");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("(415) 573-3098");
    setContactText("Phone Number Copied");
    setCopied(true);
    setTimeout(() => {
      setContactText("Contact Us");
      setCopied(false);
    }, 3000);
  };

  const closeMenu = () => setShowMenu(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/Logo.png" 
              alt="Modern Realty" 
              className="h-8 sm:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <div className="relative">
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
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  copied
                    ? "text-orange-200 border-2 border-orange-300"
                    : "text-white hover:text-orange-200"
                }`}
                onClick={handleCopy}
              >
                {contactText}
              </button>
            </div>

            <a
              href="https://www.modernrealty.io/homes"
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-white hover:text-orange-200 transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {showMenu ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {showMenu && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-sm rounded-lg mt-2">
              <div className="relative px-3 py-2">
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
                  className={`w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                    copied
                      ? "text-orange-200 border border-orange-300"
                      : "text-white hover:text-orange-200"
                  }`}
                  onClick={handleCopy}
                >
                  {contactText}
                </button>
              </div>
              
              <a
                href="https://www.modernrealty.io/homes"
                className="block px-3 py-2 text-white hover:text-orange-200 transition-colors duration-200"
                onClick={closeMenu}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
