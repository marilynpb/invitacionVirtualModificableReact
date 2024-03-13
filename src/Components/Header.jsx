import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import lineasDecoracion from '../img/img_linea01.svg';
import musica from '../music/Tchaikovsky.mp3';

function Header(){
    return (
        <div className="contenedor container-fluid text-center p-0 m-0">
            <div className="layout">
                <div id="audioContainer" style={{display: 'none'}}>
                    <audio id="miAudio" controls autoplay volume="0.25">
                        <source src={musica} type="audio/mp3"/>
                        Tu navegador no soporta la reproducción de audio.
                    </audio>
                </div>
                {/*<button id="toggleAudio"><img id="audioIcon" src="./img/icono/mute.svg" alt="Reproducir"></button>*/}
                <h1 className="fw-bold pb-3" style={{textShadow: '2px 2px 4px #0e0d0d'}}  data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                    <img src={lineasDecoracion} width="50px"/> Mis 15 años <img src={lineasDecoracion} width="50px" style={{transform: 'scaleX(-1)'}}/>
                </h1>
                <h2 className="pb-3" style={{textShadow: '2px 2px 4px #4b4848'}}  data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">Gloria Nahiara Hajduczyk Boyko</h2>
                <span className="fecha" style={{fontSize: '20px',  textShadow: '2px 2px 4px #4b4848', border: '2px solid #b5976b', backgroundColor: '#b5976b81'}}>06/04/2024</span>
            </div>
        </div>
    )
};

export default Header;