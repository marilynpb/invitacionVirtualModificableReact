import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";

function CuentaRegresiva(){
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      });
    
      useEffect(() => {
        const targetDate = new Date('April 06, 2024 20:30:00 GMT-0300');
    
        function updateCountdown() {
          const currentDate = new Date();
          const difference = targetDate - currentDate;
    
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
          setCountdown({ days, hours, minutes, seconds });
        }
    
        const intervalId = setInterval(updateCountdown, 1000);
    
        return () => clearInterval(intervalId);
      }, []);
    
    return(
        <div className="contador mx-auto text-center mt-5"  data-aos="zoom-in">
        <p className="fw-bold mt-5 title-contador" style={{fontSize: '28px'}}  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">Cuenta regresiva !</p>  

        <div  data-aos="fade-up"
        data-aos-duration="3000" id="countdown" className="mx-auto text-center" style={{borderRadius: '100%', width: '250px', height: '290px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <p className="p-0 m-0">Días</p>
            <span className="fw-bold" id="days" style={{fontSize: '27px'}}>{countdown.days}</span>
            
            <p className="p-0 m-0">Horas</p>
            <span className="fw-bold" id="hours" style={{fontSize: '27px'}}>{countdown.hours}</span>
            
            <p className="p-0 m-0">Minutos</p>
            <span className="fw-bold" id="minutes" style={{fontSize: '27px'}}>{countdown.minutes}</span>
        
            <p className="p-0 m-0">Segundos</p>
            <span className="fw-bold" id="seconds" style={{fontSize: '27px'}}>{countdown.seconds}</span>
        </div>
    </div>
    )
}

export default CuentaRegresiva;