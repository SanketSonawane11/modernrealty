import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Faq from "./Components/Faq";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Faq />
    </div>
  );
}

export default page;
