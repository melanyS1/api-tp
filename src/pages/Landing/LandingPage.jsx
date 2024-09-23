import React, { useState } from "react";
import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import AdditionalSection from "../../components/AdditionalSection/AdditionalSection";
import Footer from '../../components/Footer/Footer';
import SignIn from '../Sign-in/SignIn';

export default function LandingPage() {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleRegisterClick = () => {  
    setShowSignIn(true); 
  };

  return (
    <div className="flex flex-col">
      <Header onRegisterClick={handleRegisterClick} />
      <MainSection />
      <FeatureSection />
      <AdditionalSection />
      
      {showSignIn && <SignIn />}

      <Footer />
    </div>
  );
}
