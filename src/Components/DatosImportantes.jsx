import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import DetallesExtra from './DetallesExtra';
import Formulario from './Formulario';
import decoracionGoldText from '../img/goldd.png';
import groupFlores4 from '../img/Grupo04.png';

function DatosImportantes(){
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const abrirFormulario = () => {
        setMostrarFormulario(true);
    }

    useEffect(() => {
        function toggleMap() {
            var mapa = document.getElementById("mapa");
            var boton = document.getElementById("toggleMap");

            if (mapa.style.display === "none") {
                mapa.style.display = "block";
                boton.textContent = "Ocultar mapa";
            } else {
                mapa.style.display = "none";
                boton.textContent = "Ver mapa";
            }
        }

        // Agregar el evento click al botón para mostrar/ocultar el mapa
        document.getElementById("toggleMap").addEventListener("click", toggleMap);

        // Limpiar el evento al desmontar el componente para evitar fugas de memoria
        return () => {
            document.getElementById("toggleMap").removeEventListener("click", toggleMap);
        };
    }, []); // El segundo argumento [] indica que este efecto se ejecutará solo una vez al montar el componente

    return(
        <div className="text-center mt-4 mx-auto" style={{maxWidth: '400px'}}>
            <img src={groupFlores4} className="mx-auto p-0 m-0" width="300px" height="auto"  data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"/>

            {/* Información de la Fiesta */}
            <h3 className="m-0 p-0" style={{fontSize: '25px'}}>Información</h3>
            <img className="p-0 m-0 mt-1" width="200px" height="auto" src={decoracionGoldText}/>

            <div className="row pt-5"  data-aos="fade-up"
            data-aos-duration="3000">
                <div className="col-12">
                    <p className="p-0 m-0 fw-bold" style={{fontSize: '18px'}}>Día</p>
                    <span className="p-0 m-0" style={{fontSize: '23px'}}>06/04/2024</span>
                </div>

                <div className="col-12 pt-4">
                    <p className="p-0 m-0 fw-bold" style={{fontSize: '18px'}}>Lugar</p>
                    <span className="p-0 m-0" style={{fontSize: '23px'}}>Salón Luis de Anna</span>
                </div>

                <div className="col-12 pt-4">
                    <p className="p-0 m-0 fw-bold" style={{fontSize: '18px'}}>Horario</p>
                    <span className="p-0 m-0" style={{fontSize: '23px'}}>De 20:30hs a 05:00hs</span><br/>                    
                </div>

                <div className="col-12 pt-4">
                    <p className="p-0 m-0 fw-bold" style={{fontSize: '18px'}}>Dirección</p>
                    <span className="p-0 m-0" style={{fontSize: '24px'}}>Hernandarias 1264, Lanús Oeste, Buenos Aires</span><br/>
                    <button id="toggleMap" className="mx-auto text-center mt-3" onclick="toggleMap()">Ver mapa</button>
                    <iframe className="container-fluid mt-4" id="mapa" src="https://www.google.com/maps/embed?pb=!3m2!1ses!2sar!4v1707247455260!5m2!1ses!2sar!6m8!1m7!1sYAyc05ECjCBa46P1U6WYTg!2m2!1d-34.72667194327489!2d-58.41151304714592!3f266.0939!4f0!5f0.7820865974627469" 
                    height="250px" style={{border: '0', display: 'none'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    
                    <p className="pt-5">Si ya sabés que no te vas a perder la fiesta, por favor confirmá tu asistencia a continuación :)</p>
                    <button id="btnConfirmar" onClick={abrirFormulario} className="mx-auto text-center mt-3 buttonConfirmar">Confirmar asistencia</button>

                    {/* Contenedor Formulario como widget */}
                    <Formulario/>
                </div>
                
                    {/* Detalles Extra */}
                    <DetallesExtra/>
            </div>
        </div>
    )
}

export default DatosImportantes;