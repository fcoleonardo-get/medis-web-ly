import React, { useState } from 'react';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import style from './styles/header.module.css';
import coracao from '../../../public/coracao.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header ({triagem, setShow}) {
  const [open,setOpen] = useState(false);
  const route = useRouter();

  const menuMobile = () =>{
    return(<div className={style.menumobile}>
              <Nav className={style.navbox}>
                  <Link href="/">Inicio</Link>
                  <Link href="/TriagemPaciente">Triagem</Link>
                  <Link href="/UserPerfil">Perfil</Link>
                  <Link href="/Historico">Histórico</Link>
                  <Link href="/Sobre">Sobre</Link>
              </Nav>
            
              <div className={style.navbox}>
                
              </div> 
          </div>);
  }


  return (    
  <Navbar className={style.nav} fixed="top">
    <Container>
      <div className={style.logobox}>
        <Image src={coracao} alt="logo" />
        <Button className={style.bntmedis} onClick={()=>{route.push('/')}}>MeDIS</Button> 
      </div>
      <Nav className={style.links}>
        <div className={style.boxlinks}>
            <Link href="/">Inicio</Link>
            <Link href="/TriagemPaciente">Triagem</Link>
            <Link href="/UserPerfil">Perfil</Link>
            <Link href="/Historico">Histórico</Link>
            <Link href="/Sobre">Sobre</Link>
        </div>
      </Nav>
     <div className={style.links}>
                      
     </div> 
                  
      {open ? menuMobile():<></>}
      <div>
        <Button className={style.bntmobile} onClick={()=>{setOpen(!open)}}>
          <FontAwesomeIcon icon={faBars} size="3x"/>
        </Button>
      </div>
    </Container>
  </Navbar>);
}

export default Header;
