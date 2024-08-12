import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Faq from "./Components/Faq";
import Pricing from "./Components/Pricing";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Faq />
      <Pricing />
    </div>
  );
}

export default page;
