import React from 'react';
import { Container } from 'react-bootstrap';
import SobreInfo from '../Views/Sobre/Sobre';
import NavHome from '../Views/components/Navbar';


function Sobre() {

  return (
    <>
      <NavHome />
      <Container className="d-flex flex-column justify-content-center align-items-center p-5 my-5">
        <SobreInfo />
      </Container>
    </>
  );
}

export default Sobre;
