import React, { useState  , useEffect} from 'react';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import style from '../styles/nav.module.css';
import logo from '../../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'


function NavHome({triagem, setShow}) {
  const [open,setOpen] = useState(false);
  const route = useRouter();
  const [logado, setLogado] = useState(false);

  useEffect(()=>{
    if (typeof window !== 'undefined') {
         setLogado(localStorage.getItem('token'))
    }
  });

  const auth = () =>{
     
      if(logado){
        return(<div className={style.userimgbox}>
                <FontAwesomeIcon icon={faUser} size='2x' style={{ color: 'gray' }} />
              </div>);
      }else{
          return(<>
                  <Button className={style.bntentra} onClick={()=>{route.push('Login')}}>Entrar</Button>
                  <Button className={style.bntcadastre} onClick={()=>{route.push('CadastroPaciente')}} >Cadastre-se</Button>   
                </>);
      }
  }
  
  const isLogado = (href) =>{

      if(logado){
        return href
      }else{
        return '/Login'
      }
  }
 

  const menuMobile = () =>{
    return(<div className={style.menumobile} >
              <Nav className={style.navbox}>
                  <Link href="/">Inicio</Link>
                  <Link href={isLogado("/TriagemPaciente")}>Triagem</Link>
                  <Link href={isLogado("/UserPerfil")}>Perfil</Link>
                  <Link href={isLogado("/Historico")}>Histórico</Link>
                  <Link href="/Sobre">Sobre</Link>
              </Nav>
              {!triagem ? 
              <div className={style.navbox}>
                <Button className={style.bntentra} onClick={()=>{route.push('Login')}}>Entrar</Button>
                <Button className={style.bntcadastre} onClick={()=>{route.push('CadastroPaciente')}}>Cadastre-se</Button>   
              </div> : <div className={style.navbox}> <Button className={style.bntentra} onClick={()=>setShow(true)}>Cancelar Triagem</Button></div>}
          </div>);
  }


  return (    
  <Navbar className={style.nav} fixed="top" suppressHydrationWarning>
    <Container>
      <div className={style.logobox}>
       
        <Button className={style.bntmedis} style={{background:'transparent', border:'none'}} onClick={()=>{route.push('/')}}>
            <Image src={logo} alt="logo" />
        </Button> 
      </div>
      <Nav className={style.links}>
        <div className={style.boxlinks}>
            <Link href="/">Inicio</Link>
            <Link href={isLogado("/TriagemPaciente")}>Triagem</Link>
            <Link href={isLogado("/UserPerfil")}>Perfil</Link>
            <Link href={isLogado("/Historico")}>Histórico</Link>
            <Link href="/Sobre">Sobre</Link>
        </div>
      </Nav>
      {!triagem ? <div className={style.links}>
                    {auth()}
                  </div> : <div className={style.links}><Button className={style.bntentra} onClick={()=>setShow(true)}>Cancelar Triagem</Button></div> }
                  
      {open ? menuMobile():<></>}
      <div>
        <Button className={style.bntmobile} onClick={()=>{setOpen(!open)}}>
          <FontAwesomeIcon icon={faBars} size="3x"/>
        </Button>
      </div>
    </Container>
  </Navbar>);
}

export default NavHome;
