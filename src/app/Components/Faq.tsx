"use client";

import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
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
    <div className="w-full px-10 py-8 flex items-center justify-center flex-col">
      <div className="w-fit text-[2rem] md:text-[2.5rem] mb-8">
        <h2>Frequently Asked Question's</h2>
      </div>
      <div className="w-full text-[1rem] md:text-[1.5rem] flex justify-center items-center">
        <div className="w-[100%] md:w-[50%]">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left px-4 py-2 bg-transparent text-white/70 font-semibold rounded-lg transition-all duration-300 ${
                  activeIndex === index ? "rounded-b-none" : ""
                }`}
              >
                {item.question}
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className=" px-4 py-2 w-full text-white/50 rounded-b-lg translate-x-4 flex items-center justify-start gap-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[40%] hidden md:block">
          <img
            src="/Problem.png"
            className="overflow-hidden object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default Accordion;
