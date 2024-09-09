import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import FeatureSection from "./components/FeatureSection";
import AdditionalSection from "./components/AdditionalSection";
import Footer from "./components/Footer"; 
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <FeatureSection />
      <AdditionalSection />
      <Footer /> 
    </div>
  );
}

export default App;
