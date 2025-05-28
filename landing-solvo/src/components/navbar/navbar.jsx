import React,{useState} from 'react'
import Logo from '../../assets/logo.png';
import Letrero from '../../assets/letreroSolvoTemporal.png';
import BGVideo from '../../assets/bgvideo.mp4'


const navbarlinks = [
    {
        id:     1,
        title:  "Inicio",
        link:   "/"
    },
    {
        id:     2,
        title:  "Nosotros",
        link:   "#"
    },
    {
        id:     3,
        title:  "Contactos",
        link:   "#"
    },
    {
        id:     3,
        title:  "Soporte",
        link:   "#"
    }
]

const navbarRedes = [ 
    {
        id:     1,
        title:  "Instagram",
        link:   "#" ,           //añadir enlace a ig//
        icon:   "bi bi-instagram"
    },
    {
        id:     2,
        title:  "Email",
        link:   "#" ,           //añadir enlace a gmail//
        icon:   "bi bi-envelope-at-fill"
    },
      {
        id:     3,
        title:  "X",
        link:   "#" ,           //añadir enlace a gmail//
        icon:   "bi bi-twitter-x"
    },
      {
        id:     4,
        title:  "YouTube",
        link:   "#" ,           //añadir enlace a gmail//
        icon:   "i bi-youtube"
    },
      {
        id:     5,
        title:  "TickTock",
        link:   "#" ,           //añadir enlace a gmail//
        icon:   "bi bi-envelope-at-fill"
    }
]

const navbar = () => {

    const [isOpen,setIsOpen] = useState(false);

    const toggleMenu = () => {
            setIsOpen(!isOpen)
        }


  return (
    <nav className='fixed: top-0 left-o bg-amber-800 w-full bg-opacity-30 backdrop-blur-md z-50 '>
        <div>
            {/*bacground del nav*/}
            <video autoPlay loop muted
                style={{
                    position:"absolute",
                    width:"100%",
                    left:"50%",
                    top:"50%",
                    height:"100%",
                    objectFit:"cover",
                    transform:"translate(-50%, -50%)",
                    zIndex:"-1"

                }}
            >
                <source src={BGVideo} type="video/mp4" />
            </video>
            
        
     
            <div className='fixed: top-0 left-o bg-amber-800 w-full bg-opacity-30 backdrop-blur-md z-50 '>
                <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
                

                    {/*logo navbar*/}
                    <div>
                        <img src={Logo} alt='logo del sitio' className='w-[100px]'/>
                    </div>

                    {/* Boton de hamburguesa*/}
                    <button onClick={toggleMenu} className='md:hidden text-amber-800'>
                        <svg 
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'

                        >
                            {isOpen ? (
                                    <path 
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path 
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                            
                            

                        </svg>
                    </button>

                    {/*navegacion desktop*/}
                    <div className='hidden md:block'>
                        <ul className='flex sm:space-x-8 space-x-4'>
                            {navbarlinks.map((link)=>(
                                <li key={link.id}>
                                    <a
                                        className='text-amber-800 sm:text-lg text-sm hover:text-red-700 transition-transform hover:scale-110
                                            transform inline-block duration-300'
                                        href={link.link}>
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/*navegacion redes desktop*/}
                    <div className='hidden md:block'>
                        <ul className='flex space-x-4'>
                            {navbarRedes.map((link)=>(
                                <li key={link.id}>
                                    <a
                                    target='_blamk'
                                    rel='noopener noreferrencer'
                                    className='inline-block transition-transform duration-300 transfrom hover:scale-125'
                                    href={link.link}>
                                        <i
                                            className={`${link.icon} sm:text-2x1 text-lg text-amber-800 hover:text-red-700 transition-all duration-300`}
                                        >
                                        </i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/*menu movil*/}
                <div className={`md:hidden absolute w-full bg-amber-200 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                    <ul className='flex flex-col px-4 py-2'>
                            {navbarlinks.map((link)=>(
                            <li key={link.id} className="py-2 text-center">
                                <a
                                    className='text-amber-800 hover:text-red-700'
                                    href={link.link}
                                    onClick={()=>setIsOpen(false)}>
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul> 
                    
                    {/*menu movil redes*/}
                    <ul className='flex space-x-4 px-4 py-2 border-t border-amber-800 justify-center'>
                        {navbarRedes.map((link)=>(
                            <li key={link.id}>
                                <a
                                    target='_blamk'
                                    rel='noopener noreferrencer'
                                    className='inline-block'
                                    href={link.link}  
                                    onClick={()=>setIsOpen(false)}
                                >
                                    <i
                                        className={`${link.icon} text-lg text-amber-800 hover:text-red-700`}
                                    >
                                    </i>
                                </a>
                            </li>
                        ))}
                    </ul> 
                </div>
            </div>


            {/* texto superpuesto */}
            <div className="flex justify-center ">
                <div className="flex flex-col items-center text-white space-y-4 py-8">
                    <div>
                    <img src={Letrero} alt="letrero Solvo" className="w-[350px]" />
                    </div>

                    <div className="bg-black bg-opacity-60 rounded-xl py-6 px-10 max-w-xs text-center mb-8">
                    <h1 className="text-3xl font-semibold mb-4">¿Qué es Solvo?</h1>
                    <p>Solvo es un gestor de tiempo orientado a mejorar la salud mental de los usuarios</p>
                    </div>
                </div>
            </div>

        </div>
    </nav>
  )
}

export default navbar