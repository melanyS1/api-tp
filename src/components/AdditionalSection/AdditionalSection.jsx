import React from "react";
import imagenAdicional from '../../images/imagen-adicional.png'; 

export default function AdditionalSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto my-5 p-5 bg-white box-border min-h-[400px]">
      <div className="mb-5 md:mb-0 md:mr-5">
        <p className="font-bold text-3xl md:text-4xl lg:text-5xl text-black text-left">
          Lleva un control de las<br />
          cuentas con tu compañero de<br />
          piso sin pensar demasiado.
        </p>
      </div>
      <div className="mt-5 md:mt-0"> 
        <img src={imagenAdicional} alt="Imagen adicional" className="max-w-lg md:max-w-xl lg:max-w-2xl h-auto" />
      </div>
    </section>
  );
}
