"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
    popular: false,
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
    popular: true,
  },
];

const FeatureList = ({ features }: { features: string[] }) => (
  <ul role="list" className="mt-6 space-y-4">
    {features.map((feature, index) => (
      <li key={index} className="flex items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0 w-5 h-5 text-orange-400 mt-0.5"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span className="ml-3 text-sm sm:text-base leading-relaxed text-white/80">{feature}</span>
      </li>
    ))}
  </ul>
);

const PricingCard = ({ plan, index }: { plan: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Subtle entrance animation
    gsap.fromTo(
      card,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=50",
          end: "bottom top+=50",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Subtle hover effect
    const handleMouseEnter = () => {
      setIsHovered(true);
      gsap.to(card, {
        y: -5,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="relative group"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg" />
      
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="relative p-6 sm:p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/20 shadow-xl transition-all duration-300">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {plan.title}
          </h3>
          <div className="mt-4 mb-6">
            <p className="flex items-baseline">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                {plan.price}
              </span>
            </p>
            <p className="text-white/60 text-sm sm:text-base mt-2">
              Commission rate
            </p>
          </div>
          <FeatureList features={plan.features} />
        </div>
        
        <div className="mt-8">
          <a
            className={`block w-full py-3 px-6 rounded-xl text-center font-semibold text-white transition-all duration-300 ${
              plan.popular
                ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg"
                : "bg-white/10 hover:bg-white/20 border border-white/20"
            }`}
            href={plan.buttonHref}
          >
            {plan.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Subtle title and subtitle animations
    gsap.fromTo(
      titleRef.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          end: "bottom top+=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      {
        y: 15,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top bottom-=100",
          end: "bottom top+=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Very subtle parallax effect
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.05; // Very subtle
        gsap.to(sectionRef.current, {
          y: rate,
          duration: 0.1,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background matching the page theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Simple, Transparent Pricing
          </h2>
          <p
            ref={subtitleRef}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-white/70 leading-relaxed"
          >
            Choose the plan that works best for your real estate investment needs. 
            Start with our self-service option or go full-service for complete support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-white/60 text-sm sm:text-base">
            All plans include our core features. Contact us for custom enterprise solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
