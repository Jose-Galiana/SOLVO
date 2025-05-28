import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import i1 from "../../assets/slider/inicio.jpeg";
import i2 from "../../assets/slider/registro.jpeg";
import i3 from "../../assets/slider/home.jpeg";
import i4 from "../../assets/slider/calendar.jpeg";
import i5 from "../../assets/slider/rewards.jpeg";
import i6 from "../../assets/slider/perfil.jpeg";

const images = [i1, i2, i3, i4, i5, i6];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center p-4
  bg-[radial-gradient(circle_at_center,_white,_#86efac)]"
    >
      <div className="flex justify-center overflow-hidden rounded-2xl shadow-lg relative h-[800px] w-[400px]">
        <AnimatePresence>
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="slider"
            className="w-full object-cover h-[800px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <button
          type="button"
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          ←
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          →
        </button>
      </div>
    </div>
  );
}
