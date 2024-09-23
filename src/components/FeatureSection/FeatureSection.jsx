import React from "react";
import mobile from '../../images/phone-1.png'; 
import mobileTwo from '../../images/phone-1.png'; 

export default function FeatureSection() {
  return (
    <section className="flex items-center justify-center" style={{ backgroundColor: '#B9FF66', padding: '60px 20px' }}>
      <div className="flex items-center justify-between max-w-6xl w-full">
        <div className="flex-1 flex justify-end gap-5">
          <img src={mobile} alt="Phone-1" className="w-72 h-auto" />
          <img src={mobileTwo} alt="Phone-2" className="w-72 h-auto" />
        </div>
        <div className="flex-1 text-center pl-5">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl m-0"> 
            Las finanzas de tu<br />
            grupo de amigos,<br />
            resueltas para vos.
          </h2>
        </div>
      </div>
    </section>
  );
}
