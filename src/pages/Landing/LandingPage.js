import React from "react";
import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import AdditionalSection from "../../components/AdditionalSection/AdditionalSection";
import Footer from '../../components/Footer/Footer';
import "./LandingPage.css"; 

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <MainSection />
      <FeatureSection />
      <AdditionalSection />
      <Footer />
    </div>
  );
}
