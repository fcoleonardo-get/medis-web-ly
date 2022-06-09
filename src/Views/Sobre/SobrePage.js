import React from 'react';
import Image from 'next/image';
import style from './styles/sobre.module.css';
import gpsics from '../../../public/gpsics.png';

function SobrePage({ title, text, equipe, listequipe }) {


  return (
    <div className={style.page}>

      <div className={style.div}>

        <h1 className={style.title}>{title}</h1>
        <p className={style.text}>{text}</p>
        <div className={style.container}>
          <div className={style.row}>

            <div>
              <Image src={gpsics} alt='parceiros' />
            </div>

            <div>
                <h2 className={style.h2} >{equipe}</h2>
                {listequipe.map((item, index)=>{
                  return(
                    <ul className={style.p}>
                      <li key={index}>{item}</li>
                    </ul>
                  )
                })}
                

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default SobrePage;
