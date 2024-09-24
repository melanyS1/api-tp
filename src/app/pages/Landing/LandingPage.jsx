import React, { useState } from "react";
import Header from '../../app/components/Header/Header';
import MainSection from '../../app/components/MainSection/MainSection';
import FeatureSection from "../../app/components/FeatureSection/FeatureSection";
import AdditionalSection from "../../app/components/AdditionalSection/AdditionalSection";
import Footer from '../../app/components/Footer/Footer';
import SignIn from '../Sign-in/SignIn';

export default function LandingPage() {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleRegisterClick = () => {  
    setShowSignIn(true); 
  };

  return (
    <div className="flex flex-col mx-auto">
      <Header onRegisterClick={handleRegisterClick} />
      <MainSection />
      <FeatureSection />
      <AdditionalSection />
      
      {showSignIn && <SignIn />}

      <Footer />
    </div>
  );
}
