import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeatureIntegration from "./components/FeatureIntegration";
import DesignShowcase from "./components/Designshowcase";
import StatsBanner from "./components/Statesbanner";
import EnhanceWebsite from "./components/Enhancewebsite";
import WorkflowFeatures from "./components/Workflowfeatures";
import Testimonials from "./components/Testimonials";
import VideoBanner from "./components/Videobanner";
import Faqs from "./components/Faqs";
import WorkSmarter from "./components/Worksmarter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative" style={{ height: "1000px" }}>
      <Navbar />
      <Hero />
      <Features />
      <FeatureIntegration />
      <DesignShowcase />
      <StatsBanner />
      <EnhanceWebsite />
      <WorkflowFeatures />
      <Testimonials />
      <VideoBanner />
      <Faqs />
      <WorkSmarter />
      <Footer />
    </div>
  );
}

export default App;
