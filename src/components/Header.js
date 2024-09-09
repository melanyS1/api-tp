import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="nameApp">TicketSplit</h1>
      <nav className="nav">
        <a href="#login" className="nav-button">Iniciar sesión</a>
        <a href="#register" className="nav-button nav-button-register">Registrarse</a>
      </nav>
    </header>
  );
}
