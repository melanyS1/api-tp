import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white text-black p-4 w-full">
      <h1 className="text-3xl font-bold text-gray-800">Split the bill</h1>
      <nav className="flex gap-2">
        <a
          href="#login"
          className="text-lg text-black no-underline py-2 px-4 transition duration-300 hover:bg-white hover:text-green-600" 
        >
          Iniciar sesión
        </a>
        <a
          href="#register"
          className="text-lg text-black no-underline py-2 px-4 border-2 border-black rounded-lg transition duration-300 hover:bg-white hover:text-green-600" 
        >
          Registrarse
        </a>
      </nav>
    </header>
  );
}
