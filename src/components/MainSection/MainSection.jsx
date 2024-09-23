import React from "react";
import mainImage from './../../assets/images/Illustration.svg'
export default function MainSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center h-screen bg-white p-5">
      <div className="main-content max-w-lg ml-0 md:ml-10 mr-0 md:mr-auto text-center md:text-left">
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

      <div className="image-container mt-8 md:mt-0 flex-shrink-0">
        <img
          src={mainImage}
          alt="Example"
          className="w-[300px] md:w-[500px] h-auto"
        />
      </div>
    </section>
  );
}
