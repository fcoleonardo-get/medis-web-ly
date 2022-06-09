import React, { useState } from 'react';
import style from '../styles/main.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import img_virus from '../../../public/img/virus.png';
import img_sintomas from '../../../public/img/sintomas.png';
import img_vacina from '../../../public/img/vacina.png';
import img_transmissao from '../../../public/img/transmissao.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'


function CardsHome() {

  const [scroll,setScroll] = useState(0);
  const route = useRouter();

  const left = ()=>{
      console.log(scroll);
      if(scroll > -100){
        let lf = document.getElementById("teste");
        setScroll(scroll - 100);
        lf.scrollLeft=scroll;
      }
  }

  const rigth = ()=>{
      console.log(scroll);
      if(scroll < 500){
          let lf = document.getElementById("teste");
          setScroll(scroll + 100);
          lf.scrollLeft=scroll;
      } 
  }

  return ( <div>
            
            <div className={style.boxcards} id="teste">
              <div className={style.arrowleft} onClick={()=>{left()}}>
                 <FontAwesomeIcon icon={faArrowLeft} size='2x' style={{color:'gray'}} />  
              </div>
              <div className={style.card} onClick={()=>{route.push('PrevencaoDica1')}}>
                  <Image src={img_virus} alt="virus" />
                  <p>Sobre o COVID-19</p>
              </div>
              <div className={style.card} onClick={()=>{route.push('PrevencaoDica2')}}>
                  <Image src={img_transmissao} alt="transmissao" />
                  <p>Como me previnir?</p>
              </div>
              <div className={style.card} onClick={()=>{route.push('PrevencaoDica3')}}>
                  <Image src={img_sintomas} alt="sintomas" />
                  <p>Quais são os sintomas?</p>
              </div>
              <div className={style.card} onClick={()=>{route.push('PrevencaoDica4')}}>
                  <Image src={img_vacina} alt="vacina" />
                  <p>Existe Vacina?</p>
              </div> 
              <div className={style.arrowright} onClick={()=>{rigth()}}>
                 <FontAwesomeIcon icon={faArrowRight} size='2x' style={{color:'gray'}} />   
              </div>  
            </div>          
        </div>);
}

export default CardsHome;
