import React from "react";
import "./AdditionalSection.css"; 
import imagenAdicional from "../images/imagen-adicional.png"; 

export default function AdditionalSection() {
  return (
    <section className="additional-section">
      <div className="additional-text">
        <p>Lleva un control de las<br/>
        cuentas con tu compañero de<br/>
        piso sin pensar demasiado.</p>
      </div>
      <div className="additional-image">
        <img src={imagenAdicional} alt="Imagen adicional" />
      </div>
    </section>
  );
}
