import React from 'react'
import MujerIdea from "../../assets/MujerIdea.png"
import Letrero from "../../assets/letreroSolvoTemporal.png"
import { motion } from "framer-motion"
import { slipeUp } from '../../utility/animation'
import nutriIcon from '../../assets/nutriIcon.png'
import webIcon from '../../assets/webIcon.png'
import libroIcon from '../../assets/libroIcon.png'
import psicoIcon from '../../assets/psicoIcon.png'
import calendIcon from '../../assets/calendario.png'
import recompensaIcon from '../../assets/recompensaIcono.png'
import emojiIcon from '../../assets/emoticonosIcon.png'
import tareasIcon from '../../assets/tareasIcono.png'

const Cuerpo = () => {
  return (
    <section>
      {/* Sección Servicios */}
      <div className='hidden md:block bg-gray-500 text-white py-10 px-10'>
        <div className='flex justify-center text-2xl font-semibold'>
          ¿Qué servicios podrás encontrar?
        </div>

        <div className='flex justify-center flex-wrap gap-8 mt-10'>
          <ul className='flex flex-wrap justify-center gap-8 max-w-4xl'>

            {/* Libros duplicados */}
            <li className="group bg-white text-black p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-48 h-48 transition-transform duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
              <img
                src={calendIcon}
                alt="Libros"
                className="w-20 h-20 mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              Registro Hábitos
            </li>
            <li className="group bg-white text-black p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-48 h-48 transition-transform duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
              <img
                src={libroIcon}
                alt="Libros"
                className="w-20 h-20 mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              Libros
            </li>

            {/* Psicólogos duplicados */}
            <li className="group bg-white text-black p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-48 h-48 transition-transform duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
              <img
                src={psicoIcon}
                alt="Psicólogos"
                className="w-20 h-20 mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              Psicólogos
            </li>
            <li className="group bg-white text-black p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-48 h-48 transition-transform duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
              <img
                src={tareasIcon}
                alt="Psicólogos"
                className="w-20 h-20 mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              Planificador Tareas
            </li>

            {/* Web duplicados */}
            <li className="group bg-white text-black p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-48 h-48 transition-transform duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
              <img
                src={webIcon}
                alt="Web"
                className="w-20 h-20 mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              Web
            </li>
            <li className="group bg-white text-black p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-48 h-48 transition-transform duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
              <img
                src={recompensaIcon}
                alt="Web"
                className="w-20 h-20 mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              Recompensas
            </li>

            {/* Nutricionistas duplicados */}
            <li className="group bg-white text-black p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-48 h-48 transition-transform duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
              <img
                src={nutriIcon}
                alt="Nutricionistas"
                className="w-20 h-20 mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              Nutricionistas
            </li>
            <li className="group bg-white text-black p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-48 h-48 transition-transform duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
              <img
                src={emojiIcon}
                alt="Nutricionistas"
                className="w-20 h-20 mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              Registro Anímico
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Cuerpo

