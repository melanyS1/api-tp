import React from "react";
import "./Footer.css"; 

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 TICKETSPLIT. Todos los derechos reservados.</p>
      <div className="footer-links">
        <a href="#about">Sobre nosotros</a>
        <a href="#contact">Contacto</a>
        <a href="#privacy">Privacidad</a>
      </div>
    </footer>
  );
}
