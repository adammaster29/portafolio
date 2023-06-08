import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Proyectos = () => {

    const navigate = useNavigate()
    const [proyect, setProyect] = useState('');
    const fullproyect = ' PROYECTOS '; // Texto completo que deseas mostrar

    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
            setProyect(fullproyect.substring(0, currentIndex + 1));
            currentIndex++;

            if (currentIndex === fullproyect.length) {
                clearInterval(interval);
            }
        }, 100); // Intervalo de tiempo entre cada letra (

        return () => {
            clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
        };
    }, []);


    // carrusel
    const [carrusel, setCarrusel] = useState(0)
    // arreglo img
    const images = [
        { name: "Pokedex", src: "/img/pokedex.png", link: "https://pokedex-group.netlify.app/" },
        { name: "Rick and morty", src: "/img/rick.png", link: "https://ricky-and-morty-adalberto.netlify.app/" },
        { name: "Ecomerce", src: "/img/ecomerce.png", link: "https://adalberto-ecommerce.netlify.app/" },
        { name: "pokedex", src: "/img/pagina-web.png", link: "https://networlddecolombia.netlify.app/" },
        { name: "Crud de Carros", src: "/img/crudcar.png", link: "https://crudcar.netlify.app/" },
        { name: "Weather App", src: "/img/weather app.png", link: "https://wheather-app-adalberto.netlify.app/" }
    ]

    const next = () => {
        const nexts = (carrusel + 1) % images.length;
        setCarrusel(nexts)
    }
    const previous = () => {
        const siguiente = (carrusel - 1 + images.length) % images.length;
        setCarrusel(siguiente)
    }

    // modal
    const [modal, setModal] = useState(false);

    const abrirmodal = () => {
        setModal(!modal)
    }
    // modal menu
    const [modalproyecto, setModalproyecto] = useState(false)
    const abrirmodalmenu = () => {
        setModalproyecto(!modalproyecto)
    }



    return (
        <div className='padre__proyectos'>
            <h1 className='proyectos__titulo'>{proyect}</h1>
            <div className="proyectos__cards">
                <div className="proyectos__ave">
                    <div onClick={abrirmodal} className="avion">
                        <img className='avion__img' src="/img/avion.gif" alt="" />
                       <img className='avion__titulo' src="/img/click.gif" alt="" />
                    </div>

                </div>


                <div className="proyectos__ave">
                    <div className="ave "><img className='ave__img' src="/img/aguila.gif" alt="" /></div>
                    <div className="ave "><img className='ave__img-2' src="/img/aguila.gif" alt="" /></div>
                </div>

            </div>
            {/*************** modal ************** */}
            {modal && (
                <div className="padre__proyectos-modal">

                    <div className="cards__carousel">
                        <a className='cards__ancor' href={images[carrusel].link} target='_blank' > <img className='cards__img' src={images[carrusel].src} alt="Carousel Image" /></a>
                        <p className='cards__nombre'>{images[carrusel].name}</p>
                        <div className='cards__contenedor-button'>
                            <button className='cards__button' onClick={previous}>&lt;</button>
                            <i onClick={() => { setModal(false) }} className='cards__button-x bx bx-x'></i>
                            <i onClick={abrirmodalmenu} className='cards__button bx bx-home'></i>
                            <button className='cards__button' onClick={next}>&gt;</button>

                        </div>
                    </div>

                </div>
            )
            }

            {/* ***************modal menu***************** */}
            {/* modal  menu*/}
            {modalproyecto && (
                <div className="contenedor__modal">
                    <div className="modal__menu">
                        <button onClick={() => navigate("/")} className='menu__button menu__button-inicio'>Inicio</button>
                        <button onClick={() => navigate('/')} className='menu__button menu__button-proyectos'>Sobre Mi</button>
                        <button onClick={() => navigate('/habilidades')} className='menu__button menu__button-habilidades'>Habilidades</button>
                        <button onClick={() => navigate('/contactos')}  className='menu__button menu__button-contactos'>Contactos</button>
                        <button onClick={() => setModalproyecto(false)} className='menu__button menu__button-salir'>Salir</button>
                    </div>
                </div>
            )



            }

        </div>
    );
};

export default Proyectos;