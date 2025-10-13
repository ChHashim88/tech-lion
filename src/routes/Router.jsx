import React from "react";
import { Routes, Route } from "react-router-dom";

// Page Imports
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Pricing from "../pages/Pricing";
import LearnMore from "../components/LearnMore";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
// Project Detail Pages
import ECommerceFashion from "../pages/ECommerceFashion";
import FinanceDashboard from "../pages/FinanceDashboard";
import StartupLanding from "../pages/StartupLanding";
import HostingDomain from "../pages/HostingDomain";

const Router = () => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/learnmore" element={<LearnMore />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsConditions />} />

      {/* Project Detail Pages */}
      <Route path="/ecommerce-fashion" element={<ECommerceFashion />} />
      <Route path="/finance-dashboard" element={<FinanceDashboard />} />
      <Route path="/startup-landing" element={<StartupLanding />} />
      <Route path="/hosting-domain" element={<HostingDomain />} />
    </Routes>
  );
};

export default Router;
