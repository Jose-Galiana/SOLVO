import React from 'react'
import MujerIdea from "../../assets/MujerIdea.png"
import { motion } from "framer-motion"
import { slipeUp } from '../../utility/animation'

const Cuerpo = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-green-400 to-white">
      {/* Imagen a la izquierda ocupando toda la altura */}
      <div className="h-full">
        <img
          src={MujerIdea}
          alt="Mujer leyendo en sofá"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Texto a la derecha */}
      <div className="flex flex-col justify-center p-10">
        <motion.div
          className="py-12"
          variants={slipeUp(0.3)}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-4xl font-bold mb-6">¿Por qué?</h1>
          <p className="text-lg leading-relaxed">
            Todos hemos podido constatar el gran impacto que ejerce el consumo de medios digitales en áreas clave de nuestro día a día, como son la gestión del tiempo, la sociabilidad o la salud mental. Solvo es una app que trabaja desde esta problemática, para fomentar entre nuestros usuarios patrones de consumo responsables y saludables.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Cuerpo

