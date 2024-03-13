import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import CardCbu from './CardCbu';
import detalleElegante from '../img/goldd.png';
import floresGroup from '../img/Grupo0333-removebg-preview.png';

function DetallesExtra(){
    return(
        <div className="col-12 pt-5 mt-5">  
            <h3 className="m-0 p-0" >Detalles</h3>
            <img className="p-0 m-0 mt-1" width="200px" height="auto" src={detalleElegante}/>

            <div className="row pt-4" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
                <div className="col-11 mx-auto">
                    <div className="tarjeta-detalles">
                        <img src={floresGroup} className="mx-auto p-0 m-0" width="150px" height="auto" style={{transform: 'scaleX(-1)'}}/>
                        <h3>Codigo de Vestimenta</h3>
                        <p style={{fontSize: '20px'}}>Elegante</p>
                        <p>o</p>
                        <p style={{fontSize: '20px'}}>Elegante Sport</p>
                    </div>
                </div>

                {/* CBU */}
                <CardCbu/>
            </div>
        </div>
    )
}

export default DetallesExtra;