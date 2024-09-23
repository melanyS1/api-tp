import React from "react";
import mainImage from '../../images/main-imagen.png';

export default function MainSection() {
  return (
    <section className="flex justify-start items-center h-screen bg-white p-5 relative">
      <div className="main-content max-w-lg ml-10 md:ml-20 mr-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Compartí gastos sin preocupaciones
        </h1>
        <p className="text-xl text-gray-600 mb-5">
          Registra, gestiona y calcula el dinero que gastas con otras personas: simple, rápido y en un solo lugar.
        </p>
        <button className="bg-black text-white py-3 px-6 text-base rounded-lg transition-colors duration-300 hover:bg-[#9ACD32]">
          Comencemos
        </button>
      </div>
      <div className="image-container">
        <img src={mainImage} alt="Example" className="w-[500px] h-auto mt-[130px] mr-[180px]" /> 
      </div>
    </section>
  );
}
