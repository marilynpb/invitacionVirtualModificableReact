import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import mariposaGif from '../img/mariposaGif.gif';
import emailjs from 'emailjs-com';

(function () {
    emailjs.init("8nj0K65JTyR5GZbLl");
})();

// Función para inicializar el envío del formulario
function initSend() {
    let first = document.getElementById('firstname');
    let last = document.getElementById('lastname');

    let profile = {
        umukiriya: 'Codenet-Bts Support Team',
        from_name: first.value + ' ' + last.value,
    }

    let fields = [first, last];
    let response = document.getElementsByTagName("subiza");
    let index = 0,
        error = 0;
    fields.forEach(element => {
        let fieldName = document.getElementsByTagName("subiza")[index].id;
        if (!element.checkValidity()) (element.value == "") ? response[index].innerHTML = 'Por favor, complete los campos' : response[index].innerHTML = element.validationMessage;
        if (element.checkValidity()) {
            response[index].innerHTML = "";
        } else {
            error++;
        }
        index++;
    });
    console.log(error);
    if (error === 0) sendMail(profile);
}

        // Función para enviar el correo electrónico
        function sendMail(params) {
            emailjs.send("service_x6yoodl", "template_hy74w5k", params)
                .then(function (response) {
                    // Mostrar la confirmación exitosa y ocultar el formulario
                    var elementosConfirmacionExitosa = document.querySelectorAll('.confirmacionExitosa');
                    var elementosOcultar = document.querySelectorAll('.ocultar');

                    elementosConfirmacionExitosa.forEach(function(elemento) {
                        elemento.style.display = 'block';
                    });

                    elementosOcultar.forEach(function(elemento) {
                        elemento.style.display = 'none';
                    });

                    // Cerrar el widget después de 3 segundos
                    setTimeout(function() {
                        cerrarFormulario();
                    }, 4000);
                }, function (error) {
                    // En caso de error al enviar el correo
                    alert('error :  ' + error);
                });   
        }

        // Función para cerrar el formulario
        function cerrarFormulario() {
            document.getElementById('formularioWidget').style.display = 'none';
        }

function Formulario(){
    useEffect(() => {


        // Agregar el evento click al botón de confirmación de asistencia
        document.getElementById('btnConfirmar').addEventListener('click', function() {
            document.getElementById('formularioWidget').style.display = 'block';
        });

        // Limpiar el evento al desmontar el componente para evitar fugas de memoria
        return () => {
            document.getElementById('btnConfirmar').removeEventListener('click', function() {
                document.getElementById('formularioWidget').style.display = 'block';
            });
        };
    }, []); // El segundo argumento [] indica que este efecto se ejecutará solo una vez al montar el componente

    return(
        <div id="formularioWidget" className="widget-container">
            <div className="widget-content">
                <span className="close-btn" onclick="cerrarFormulario()" style={{fontSize: '25px'}}>×</span>
                <h2 style={{fontSize: '24px', fontWeight: 'bold'}} className="ocultar">Confirmar Asistencia</h2>

                {/* Mensaje de Confirmación Exitosa */}
                <h2 className="confirmacionExitosa" style={{fontSize: '24px', fontWeight: 'bold'}}>Confirmado!</h2>
                <h3 className="confirmacionExitosa">Muchas gracias!</h3>
                <img className="confirmacionExitosa text-center mx-auto" src={mariposaGif} width="33%"/>
                <p className="confirmacionExitosa">Nos vemos pronto!</p>

                {/* Formulario de Confirmación */}
                <div className="lg:w-1/2  p-2 bg-white bg-opacity-10 rounded-xl ml-32">
                    <form>
                        <h3 className="flex items-center my-8 bg-black">
                            <span aria-hidden="true" className="grow bg-gray-200 rounded h-0.5"/>
                        </h3>
                        
                        {/* Inputs */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ocultar">
                            <div className="space-y-1 form-group mb-3">
                                <input type="text" className="form-control fw-bold" id="firstname" required placeholder="Nombre"/>
                                <subiza className="subizanow" id="Firstname"/>
                            </div>
                            <div className="space-y-1 form-group mb-3">
                                <input type="text" className="form-control fw-bold" id="lastname" required placeholder="Apellido"/>
                                <subiza className="subizanow" id="Lastname"/>
                            </div>
                        </div>
                        <button id="sendbtn" onClick={initSend} type="button" className="btn ocultar" style={{backgroundColor: '#b5976b', fontWeight: 'bold', color: 'white'}}>Confirmar</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Formulario;