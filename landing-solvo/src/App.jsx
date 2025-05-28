import Navbar from "./components/navbar/navbar"
import Idea from "./components/cuerpo/Idea"
import Vistas from "./components/cuerpo/VistasFigma"
import Solucion from "./components/cuerpo/Solucion"
import Servicios from "./components/cuerpo/Servicios"
import Diferenciacion from "./components/cuerpo/Diferenciacion"


function App() {
  
{/*style={bgImagen} className="overflow-hidden min-h-screen"*/}

  return (
    <div >
      <Navbar/>
      <div tag="secciones">
        <Idea/>
        <Solucion/>
        <Servicios/>
        <Vistas/>
        <Diferenciacion/>
      </div>
      




    </div>
  )
}

export default App
