import React from 'react'
import fondo from "../../assets/lechuza.jpeg"

const Cuerpo = () => {
  return (
    <section className="relative p-8 w-full bg-[#a6cc9b] flex flex-col items-center overflow-hidden">
      {/* Marca de agua */}
      <img 
        src={fondo} 
        alt="marca de agua" 
        className="absolute inset-0 w-full h-full object-contain opacity-20 pointer-events-none select-none" 
        style={{ zIndex: 0 }}
      />

      {/* Contenido encima */}
      <div className="relative max-w-3xl w-full flex flex-col items-center z-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          ¿Por qué Solvo?
        </h2>

        <div className="space-y-6 flex flex-col items-center w-full">
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-2 text-center">Económicas</h3>
            <p className="text-center">
              Solvo incentiva a sus usuarios a mejorar la gestión del tiempo mediante recompensas económicas.
            </p>
          </div>

          <div className="w-full">
            <h3 className="text-xl font-semibold mb-2 text-center">Profesionales</h3>
            <p className="text-center">
              Facilitamos al usuario contactos con profesionales de toda índole que te ayudarán con nuestro principal cometido.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cuerpo



