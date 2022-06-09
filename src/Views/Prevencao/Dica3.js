import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import img_sintomas from '../../../public/img/sintomas.png';
import style from './styles/dica.module.css';

function Dica3() {
  return <>
    <Header  />
    <div className={style.container}>
    <div className={style.img}>
        <Image src={img_sintomas} alt="sintomas" />
    </div>
    <h2>Quais são os sintomas?</h2>
    <p>
       Os coronavírus são uma grande família de vírus comuns em muitas espécies
       diferentes de animais incluindo camelos, gado, gatos e morcegos. Raramente
       os coronavírus que infectam animais podem infectar pessoas, como exemplo 
       do MERS-CoV e SARS-CoV. Recentemente, em dezembro de 2019, houve a transmissão
       de um novo coronavírus (SARS-CoV-2), o qual foi identificado em Wuhan na China 
       e causou a cor 2019, sendo em seguida disseminada e transmitida de pessoa a pessoa. 
    </p>
    <p>
       A covid-19 é uma doença causada pelo coronavírus denominado SARS-CoV-2, que apresenta
       um espectro clínico variando de infecções assintomáticas a quadros graves. De acordo 
       com a Organização Mundial da Saúde a maioria (cerca de 80%) dos pacientes com covid 19 
       podem ser assintomáticas ou oligossintomáticas (pouco sintomas),  e aproximadamente 20% 
       dos casos detectados requer atendimento hospitalar por apresentarem dificuldades
       respiratórias, dos quais aproximadamente 5% podem necessitar de suporte ventilatório.
    </p>

  </div>
  </>;
}

export default Dica3;
