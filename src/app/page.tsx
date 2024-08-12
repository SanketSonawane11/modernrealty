import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Faq from "./Components/Faq";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Faq />
      <Pricing />
      <Footer />
    </div>
  );
}

export default page;
