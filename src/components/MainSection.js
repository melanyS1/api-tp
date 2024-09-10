import React from "react";
import "./MainSection.css";
import mainImage from "../images/main-imagen.png"; 

export default function MainSection() {
  return (
    <section className="main-section">
      <div className="main-content">
        <h1 className="main-title">Compartí gastos sin preocupaciones</h1>
        <p className="main-description">
          Registra, gestiona y calcula el dinero que gastas con otras personas: simple, rápido y en un solo lugar
        </p>
        <button className="cta-button">Comencemos</button>
      </div>
      <div className="image-container">
        <img src={mainImage} alt="Example" className="main-image" />
      </div>
    </section>
  );
}

