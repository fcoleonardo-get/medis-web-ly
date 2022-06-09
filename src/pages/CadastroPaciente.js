import React,  { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Views/components/Header';
import style from '../Views/Paciente/styles/Paciente.module.css';
import ProgressCadastro from '../Views/Paciente/Cadastro';

function Paciente() {
  const [prog, setProg] = useState(0);
  
  return (<>
    <Header setProg={setProg} prog={prog} text="Cadastro"/>
    <div className={style.container}>
      <Container>
         <ProgressCadastro prog={prog} setProg={setProg} />
    </Container> 
    </div>
  </>);
}

export default Paciente;
