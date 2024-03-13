import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import imgContador from '../img/img_circuloContador01.svg';
import lineasDecoracion from '../img/img_linea01.svg';
import mariposa from '../img/mariposa_5.svg';

function Footer(){
    return(
        <div  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="mt-2 mb-0 mx-auto" style={{backgroundImage: `url(${imgContador})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', maxWidth: '500px', height: '500px'}}>

            <div className="" style={{width: '100%', height: '100%', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <img src={mariposa} className="mx-auto p-0 m-0" width="70px" height="auto" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"/>
        
                <h1 className="fw-bold pt-3 pb-2"  data-aos="fade-up"
                data-aos-duration="3000" style={{fontSize: '30px', color: 'rgb(250, 161, 192)'}}>
                    <img src={lineasDecoracion} width="40px"/> Mis 15 años <img src={lineasDecoracion} width="50px" style={{transform: 'scaleX(-1)'}}/>
                </h1>
                <h2 className="pb-2"  data-aos="fade-up"
                data-aos-duration="3000" style={{fontSize: '20px'}}>Gloria Nahiara Hajduczyk Boyko</h2>
                <span className="fecha" style={{fontSize: '20px', backgroundColor: 'rgba(255, 255, 255, 0.568)'}}>06/04/2024</span>
            </div>
        </div>
    )
}

export default Footer;