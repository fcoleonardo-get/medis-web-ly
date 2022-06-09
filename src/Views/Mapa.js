import React,{ useState } from 'react';
import { Button } from 'react-bootstrap';
import style from './Paciente/styles/Paciente.module.css';

function Mapa({textbnt, prog, setProg , setManual}) {
   const[center, setCenter] = useState()
 
   navigator.geolocation.getCurrentPosition(function(position) {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
   });
   
   const GoogleMap = () => {
        return (   
           <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d-3.745!2d-38.523!3d31.58858477434875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d31.5883935!2d-89.8794326!5e0!3m2!1sen!2sus!4v1581760461224!5m2!1sen!2sus" width="300px" height="250px" className={style.map}></iframe>
        );
       }
  return (<>
              <div className="d-flex justify-content-md-center">
                    <div className={style.modal}>
                        <div className={style.modalbody}>
                            <div style={{width:300, height: 300}}>
                        
                            </div>
                            <p className={style.p}>Esse é o endereço da sua casa?</p>
                            <h3 className={style.h3}>R. Onde o Vento faz a curva, 101, Pau dos
                                Ferros - RN, 59900-00, Brasil</h3>
                            <Button onClick={()=>{setManual(false);setProg(prog+1)}} className={style.btn}>{textbnt}</Button>
                            <a onClick={()=>{setManual(true);setProg(prog+1);}} className={style.link}>Cadastrar Manualmente</a>
                        </div>
                    </div>   
                </div>
  </>);
}

export default Mapa;
