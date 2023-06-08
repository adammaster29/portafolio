import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Habilidades = () => {

    // carrusel
    const [carrusel, setCarrusel] = useState(0)
    // arreglo img
    const icon = [
        { name: "React", class: "bx bxl-react react" },
        { name: "Javascript", class: "bx bxl-javascript javascript" },
        { name: "Html5", class: "bx bxl-html5 html5" },
        { name: "Css3", class: "bx bxl-css3 css3" },
        { name: "Github", class: "bx bxl-github github" },
        { name: "Postgresql", class: "bx bxl-postgresql postgresql" },
        { name: "Node.js", class: "bx bxl-nodejs nodejs" },
        { name: "Bootstrap", class: "bx bxl-bootstrap bootstrap" }
    ]

    const next = () => {
        const nexts = (carrusel + 1) % icon.length;
        setCarrusel(nexts)
    }
    const previous = () => {
        const siguiente = (carrusel - 1 + icon.length) % icon.length;
        setCarrusel(siguiente)
    }
// modal
const[modalmenu,setModalmenu] = useState(false)
const navigate  = useNavigate()

const abrirMenu = ()=>{
    setModalmenu(!modalmenu)
  }
 
  const cerrarmenu =()=>{
    setModalmenu(false)
  }
    return (
        <div className='padre__habilidades'>
            <div className="padre__habilidades-meteorito">
                <div className="habilidades_meteorito">
                    <div className="meteorito "><img className='meteorito__img' src="/img/meteoritos.png" alt="" /></div>
                </div>

                <div className="padre__luna">
                    <div className="habilidades_meteorito">

                        <div className="meteorito ">
                            <img className='meteorito__img' src="/img/nave-gif.gif" alt="" />
                        </div>

                    </div>
            

                    <div className="luna__contenedor">
                        <h1 className='luna__titulo' >HABILIDADES</h1>
                        {/* carrusel */}
                        <div className="carousel">
                            <imsg className={`carousel__img ${icon[carrusel].class}`} alt="Carousel Image" />
                            <p className='carousel__nombre'>{icon[carrusel].name}</p>
                            <div className='carousel__contenedor-button'>
                                <i className='carousel__button' onClick={previous}>&lt;</i>
                                <i onClick={abrirMenu} className='carousel__button bx bx-home'></i>
                                <i className='carousel__button' onClick={next}>&gt;</i>

                            </div>
                        </div>

                    </div>
                    <img className='sol__img' src="/img/sol.gif" alt="" />
                </div>
                <div className="padre__tierra"><img className='tierra__img' src="/img/tierra-2.gif" alt="" /></div>

            </div>
            {/* modal menu */}
            {modalmenu &&(
                     <div className="contenedor__modal">
                      
                     <div className="modal__menu">
                        <button onClick={()=>navigate("/")} className='menu__button menu__button-inicio'>Inicio</button>
                        <button onClick={()=>{navigate("/proyectos");()=>setModalmenu(false)}}  className='menu__button menu__button-proyectos'>Proyectos</button>
                        <button onClick={()=>navigate('/')} className='menu__button menu__button-habilidades'>Sobre Mi</button>
                        <button onClick={()=>navigate('/contactos')} className='menu__button menu__button-contactos'>Contactos</button>
                        <button onClick={cerrarmenu} className='menu__button menu__button-salir'>Salir</button>
                     </div>
                   </div>
                 )



                 }
        </div>
    );
};

export default Habilidades;