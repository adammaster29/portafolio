import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ }) => {
  const [modalmenu, setModalmenu] = useState(false)
  const navigate = useNavigate()


  const [text, setText] = useState('');
  const fullText = ' ADALBERTO AGUDELO DESARROLLADOR FULL STACK ';

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === fullText.length) {
        clearInterval(interval);
      }
    }, 100); // Intervalo de tiempo entre cada letra (

    return () => {
      clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
    };
  }, []);

  // modal
  const abrirMenu = () => {
    setModalmenu(!modalmenu)
  }

  const cerrarmenu = () => {
    setModalmenu(false)
  }




  return (

    <div className='padre '>

      <div className='padre__hijo'>
        {/* contenedor de perfil */}
        <div className="hijo__perfil">
          <img className='hijo__perfil-img' src="/img/ADAM.png" alt="adam" />
          <p className='hijo__perfil-nombre'> {text} </p>
          <span className='hijo__perfil-redes'>
            <a href="https://www.linkedin.com/in/adalberto-manuel-a-2abbb4109/" target='_blank'><i className='redes redes__linkedin bx bxl-linkedin-square'></i></a>
            <a href="https://github.com/adammaster29" target='_blank'> <i className='redes redes__github   bx bxl-github'></i></a>
            <a href="https://twitter.com/Adamagudelo24" target='_blank'><i className='redes redes__twiter bx bxl-twitter'></i></a>
            <a href="mailto:adammaster29@gmail.com?subject=Solicitamos Tus Servicios"><i className='redes redes__message bx bx-message-detail'></i></a>





          </span>

        </div>
        {/* contenedor de navegacion */}
        <div className="hijo__navegador">
          <p id='sobreMi' className="hijo__navegador-titulo">SOBRE MÍ</p>
          <p className="hijo__navegador-texto">Mi nombre es Adalberto Agudelo, tengo 29 años
            y soy ingeniero de software. También me desempeño como desarrollador full stack.
            Soy apasionado por el fútbol y me encanta estar al tanto de las últimas novedades
            tecnológicas. <br />
            En mi trayectoria profesional, he adquirido habilidades en diferentes áreas de
            desarrollo, incluyendo front-end, back-end y bases de datos. Me considero una persona proactiva,
            creativa y orientada a resultados. Disfruto resolviendo problemas y enfrentando nuevos desafíos
            en el ámbito del desarrollo de software.</p>
          <div className="hijo__navegador-page">

          </div>
          <span className='hijo__navegador-contenedor' >
            <a className='contenedor__cv' href="/public/cv/CV Canvas.pdf" target='_blank'>Descargar Cv.</a>
            <button onClick={abrirMenu} className='contenedor__button-menu' >Toca Mi Menu</button>

          </span>



        </div>
      </div>

       {/* modal  menu*/}
       {modalmenu && (
          <div className="contenedor__modal">

            <div className="modal__menu">
              <button onClick={() => navigate("/")} className='menu__button menu__button-inicio'>Inicio</button>
              <button onClick={() => { navigate("/proyectos"); () => setModalmenu(false) }} className='menu__button menu__button-proyectos'>Proyectos</button>
              <button onClick={() => navigate('/habilidades')} className='menu__button menu__button-habilidades'>Habilidades</button>
              <a className='menu__certificado' href="https://certificate-adalberto.netlify.app/" target='_blank'><button className='menu__button menu__button-habilidades'>Certificados</button></a>
              <button onClick={() => navigate('/contactos')} className='menu__button menu__button-contactos'>Contactos</button>
              <button onClick={cerrarmenu} className='menu__button menu__button-salir'>Salir</button>
            </div>
          </div>
        )



        } 
    </div>
  );
};

export default Home;