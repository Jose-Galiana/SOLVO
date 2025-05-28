import React from 'react'
import FondoPatron from "../../assets/patronFondo.png"

const Cuerpo = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${FondoPatron})`,
        imageRendering: "auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className='flex flex-col items-center text-center space-y-4 bg-white bg-opacity-80 p-8 rounded-xl shadow-lg max-w-xl'>
        <div className="text-2xl font-semibold mb-4">
          ¿Cuáles son nuestros objetivos?
        </div>

        <div>1. Reducción del tiempo de uso de redes sociales</div>
        <hr className="w-64 border-t-2 border-amber-500" />

        <div>2. Apoyo para mejorar la salud mental</div>
        <hr className="w-64 border-t-2 border-amber-500" />

        <div>3. Mantenimiento de cambios a largo plazo</div>
      </div>
    </section>
  )
}

export default Cuerpo



