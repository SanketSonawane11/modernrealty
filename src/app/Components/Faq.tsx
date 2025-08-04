"use client";

import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the advantage of you over a traditional Realtor?",
      answer:
        "We are more responsive (24/7), provide better service, and offer better prices.",
    },
    {
      question: "Do I need to sign a buyer agreement?",
      answer:
        "We will let you know if you need to sign a buyer agreement. You will for sure need to sign a buyer agreement when you submit an offer through us, but otherwise we can work out a timeline.",
    },
    {
      question: "What part of this is AI?",
      answer:
        "Our disclosure analysis tools, and some of our texting services are aided by AI. We still look through all offers that are outbound.",
    },
    {
      question: "What's the difference between you and Zillow or Redfin?",
      answer:
        "Zillow and Redfin are software services that connect you to traditional agents. You can't submit an offer on either website, for an example.",
    },
    {
      question: "Why are you doing this?",
      answer:
        "The founders of Modern Realty realized that since buyer agents are paid for by commission, they will encourage you to buy immediately and high. Modern Realty allows you to transparently control your transaction.",
    },
    {
      question: "How do I get started?",
      answer:
        'You can click on the "Get Started" button to get started with our tools. If you have questions for us, or if you have submitted an offer, use the "Give us a call" link to set up a quick onboarding meeting.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* FAQ List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full text-left px-6 py-4 text-white/90 hover:text-white font-semibold transition-all duration-300 flex items-center justify-between ${
                      activeIndex === index ? "bg-white/10" : "hover:bg-white/5"
                    }`}
                  >
                    <span className="text-sm sm:text-base pr-4">{item.question}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-4 text-white/70 text-sm sm:text-base leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="hidden lg:block">
            <div className="sticky top-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-2xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <img
                    src="/Problem.png"
                    alt="FAQ Illustration"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accordion;
