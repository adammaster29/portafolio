import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contactos = () => {
    const [isContainerVisible, setIsContainerVisible] = useState(false);
    const[modalmenu,setModalmenu] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        // Muestra el contenedor después de 2 segundos
        const timeoutId = setTimeout(() => {
            setIsContainerVisible(true);
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    // LLAMADA
    const llamar = ()=>{
        window.open('tel:+573013803583')
    }
// modal
const abrirMenu = ()=>{
    setModalmenu(!modalmenu)
  }
 
  const cerrarmenu =()=>{
    setModalmenu(false)
  }
    return (
        <div className='padre__contactos'>
            <div className='contactos__pez-animado'>

                <div className="proyectos__delfin">
                    <div className="delfin ">
                        <img className='delfin__img' src="/img/delfines.gif" alt="" />
                        <img className='delfin__img' src="/img/delfin.gif" alt="" /></div>
                </div>

            </div>
            <div className='contactos__pez'>

                {/* buso-pez */}
                <div
                    className={`buso-pez ${isContainerVisible ? 'show' : ''}`}
                >
                    <div className="pez__texto">
                        <h2 className='texto__titulo'>Contactos</h2>
                        <a href="mailto:adammaster29@gmail.com?subject=Oferts Laboral&body=Oferta laboral para ti donde puedes crecer en nuestra compañia"><i className="bx bx-message bx-tada">message</i></a>
                        <i onClick={llamar} class='bx bxs-phone-call bx-tada click-contacto'  >3013803583</i>
                        <i onClick={abrirMenu} className='bx bx-home bx-tada click-contacto'>Inicio</i>
                    </div>
                </div>

                {/* pulpo */}
                <div
                    className={`pulpo ${isContainerVisible ? 'show' : ''}`}
                >
                   
                </div>
                {/* nemo */}
                <div
                    className={`nemo ${isContainerVisible ? 'show' : ''}`}
                >
                     <div className="nemo__redes">
                        <h2 className='redes__titulo'>Redes</h2>
                        <div className='redes__contenedor-icon'>  

                       <a href="https://www.linkedin.com/in/adalberto-manuel-a-2abbb4109/" target='_blank'> <i className='bx bxl-linkedin redes__linkedin icon__redes-contacto'></i>  </a>
                       <a href="https://wa.me/qr/XT5FGS3S5BBLM1"> <i className='bx bxl-whatsapp redes__whatsapp icon__redes-contacto'></i> </a>
                       <a href="https://twitter.com/Adamagudelo24" target='_blank'> <i className='bx bxl-twitter redes__twiter icon__redes-contacto'></i>  </a>
                       <a href="https://github.com/adammaster29" target='_blank'> <i className='bx bxl-github redes__github icon__redes-contacto'></i> </a>
                        </div>
                    </div>
                </div>

            </div>
            {modalmenu &&(
                     <div className="contenedor__modal">
                      
                     <div className="modal__menu">
                        <button onClick={()=>navigate("/")} className='menu__button menu__button-inicio'>Inicio</button>
                        <button onClick={()=>{navigate("/proyectos");()=>setModalmenu(false)}}  className='menu__button menu__button-proyectos'>Proyectos</button>
                        <button onClick={()=>navigate('/')} className='menu__button menu__button-contactos'>Sobre Mi</button>
                        <button onClick={()=>navigate('/habilidades')} className='menu__button menu__button-habilidades'>Habilidades</button> 
                        <button onClick={cerrarmenu} className='menu__button menu__button-salir'>Salir</button>
                     </div>
                   </div>
                 )



                 }
        </div>
    );
};

export default Contactos;