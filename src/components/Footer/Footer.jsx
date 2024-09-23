import React from "react";

export default function Footer() {
  return (
    <footer className="py-4" style={{ backgroundColor: '#bec3be', color: '#333' }}>
      <p className="text-center mb-2">&copy; 2024 TICKETSPLIT. Todos los derechos reservados.</p>
      <div className="flex justify-center space-x-4">
        <a href="#about" className="hover:underline" style={{ color: '#333' }}>Sobre nosotros</a>
        <a href="#contact" className="hover:underline" style={{ color: '#333' }}>Contacto</a>
        <a href="#privacy" className="hover:underline" style={{ color: '#333' }}>Privacidad</a>
      </div>
    </footer>
  );
}
