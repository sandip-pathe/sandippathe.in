"use client";

import React from "react";
import { Hero } from "./Hero";
import { IntroSection } from "./IntroSection";
import { CaseStudiesSection } from "./CaseStudiesSection";
import { AboutUsSection } from "./AboutUsSection";
import { ServicesSection } from "./ServicesSection";
import { PricingSection } from "./PricingSection";
import { FAQSection } from "./FAQSection";
import { Footer } from "./Footer";

export const Home: React.FC = () => {
  return (
    <>
      <main>
        <Hero />
        <IntroSection />
        <CaseStudiesSection />
        <AboutUsSection />
        <ServicesSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
};
