import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState} from "react";
import floresGroup from '../img/Grupo0333-removebg-preview.png';

function CardCbu(){
    const [copied, setCopied] = useState(false); // Estado para controlar si se copió el CBU

    // Función para manejar el clic del botón
    const handleCopy = () => {
      // Código para copiar el CBU al portapapeles
      const cbu = "1234567890123456789012"; // Aquí debes poner el CBU real
      navigator.clipboard.writeText(cbu);
  
      // Actualizar el estado para mostrar el mensaje de copiado
      setCopied(true);
  
      // Después de 3 segundos, ocultar el mensaje de copiado
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    };

    return(
        <div className="col-11 mx-auto">
        <div className="tarjeta-detalles">
            <img src={floresGroup} className="mx-auto p-0 m-0" width="150px" height="auto" style={{transform: 'scaleX(-1)'}}/>
            <h3 style={{fontSize: '18px'}}>Si querés regalarme algo más que tu hermosa presencia</h3>
            <button className="mx-auto text-center mt-3" style={{width: 'auto'}}  onClick={handleCopy}>Mi CBU</button>
            {copied && <p>CBU copiado</p>} {/* Mostrar mensaje de copiado si es true */}
        </div>
    </div>
    )
}

export default CardCbu;