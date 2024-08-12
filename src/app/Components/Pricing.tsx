"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const pricingPlans = [
  {
    title: "Self-Service",
    price: "1%",
    features: [
      "Usage: Unlimited",
      "Text us: Unlimited",
      "Offer Writing (active listings): Unlimited",
      "Offer Writing (off market) - mailers: Unlimited",
      "Market Analysis: Unlimited",
      "Disclosures Analysis: Unlimited",
      "Meet with us: -",
      "Call Us: Limited",
    ],
    buttonText: "Call us to get onboarded",
    buttonHref: "/",
  },
  {
    title: "Full Service",
    price: "2.5%",
    features: [
      "Usage: Unlimited",
      "Text us: Unlimited",
      "Offer Writing (active listings): Unlimited",
      "Offer Writing (off market) - mailers: Unlimited",
      "Market Analysis: Unlimited",
      "Disclosures Analysis: Unlimited",
      "Meet with us: Unlimited",
      "Call Us: Unlimited",
    ],
    buttonText: "Call us to get onboarded",
    buttonHref: "/",
  },
];

const FeatureList = ({ features }: any) => (
  <ul role="list" className="mt-6 space-y-6">
    {features.map((feature: any, index: any) => (
      <li key={index} className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0 w-6 h-6 text-emerald-500"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span className="ml-3">{feature}</span>
      </li>
    ))}
  </ul>
);

const PricingCard = ({ plan }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          gsap.to(cardRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col bg-gray-100 text-gray-700"
      style={{ opacity: 0, transform: "translateX(-50px)" }}
    >
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{plan.title}</h3>
        <p className="mt-4 flex items-baseline">
          <span className="text-5xl font-extrabold tracking-tight">
            {plan.price}
          </span>
        </p>
        <FeatureList features={plan.features} />
      </div>
      <a
        className="bg-emerald-500 text-white hover:bg-emerald-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
        href={plan.buttonHref}
      >
        {plan.buttonText}
      </a>
    </div>
  );
};

const Pricing = () => (
  <div
    id="pricing"
    className="container mx-auto w-full flex items-center justify-center px-10"
  >
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight mt-12 sm:text-5xl">
        Pricing
      </h2>
      <p className="max-w-3xl mx-auto mt-4 text-xl">
        Get started on our free plan and upgrade when you are ready.
      </p>
    </div>
    <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
      {pricingPlans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  </div>
);

export default Pricing;
