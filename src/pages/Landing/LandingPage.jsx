import React from "react";
import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import AdditionalSection from "../../components/AdditionalSection/AdditionalSection";
import Footer from '../../components/Footer/Footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <MainSection />
      <FeatureSection />
      <AdditionalSection />
      <Footer />
    </div>
  );
}
