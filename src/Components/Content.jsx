import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import DatosImportantes from './DatosImportantes';
import CuentaRegresiva from './CuentaRegresiva';
import Footer from './Footer';
import ondasImg from '../img/img_ondas04.svg';
import lineas1 from '../img/lineas01.svg'
import lineas2 from '../img/lineas02.svg'
import florDorada from '../img/Grupo02_flower.webp'

function Content (){
    return(
        <div className="container-background text-center">
        {/* Decoracion Lineas */}
        <img className="p-0 m-0" src={lineas1}/>
        <img className="pt-5 pb-0 mb-0" src={florDorada} width="100px" style={{transform: 'rotate(270deg)'}}   data-aos="zoom-in"/>

        {/* Frase */}
        <p style={{fontSize: '22px'}}  data-aos="fade-up"
        data-aos-duration="3000">"Hay momentos inolvidables que se atesoran en el corazón para siempre"</p>
        <p className="mb-5 pb-5" style={{fontSize: '20px',
        paddingBottom: '130px!important'}}  data-aos="fade-up"
        data-aos-duration="3000">Te espero para compartir la alegría de esa noche que será para mágica, inolvidable y única.</p>
        
        {/* Container Cuenta Regresiva */}
        <CuentaRegresiva/>

        <img src={lineas2} className="pt-5 mt-5"/>

        {/* Datos importantes */}
        <DatosImportantes/>

        <img className="pt-5 mt-5 mb-0 pb-0 lineas" src={lineas1}/>

        {/* Footer */}
        <Footer/>

        <img src={ondasImg}/>
    </div>
    )
}

export default Content;