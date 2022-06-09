import React from 'react';
import style from '../styles/Header.module.css';
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../../../public/logo.png';


function Header({setProg, prog, text}) {

    const route = useRouter();

    const controle = () =>{
        if(prog){
            if(prog > 0){
                 setProg(prog-1);
            } 
        }else{
            route.push('/');
        }
        
    }

  return (<header>
        <Navbar  className={style.Header} expand="lg">
            <Container>
                <Navbar.Brand onClick={()=>{controle()}} style={{'cursor':'pointer'}}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} size='2x' style={{color:'white'}} />
                </Navbar.Brand>
                <Navbar.Brand>
                    <p className={style.text}>{text}</p>
                </Navbar.Brand>
                <Navbar.Brand>
                    <Image src={logo}  alt='logo' width={120} height={40}/>
                </Navbar.Brand>
            </Container>
        </Navbar>
  </header>);
}

export default Header;
