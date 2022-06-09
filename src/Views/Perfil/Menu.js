import React from 'react';
import { Button } from 'react-bootstrap';
import styleUser from './styles/user.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faClipboardList, faHome, faUser, faVirus } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

function Menu({ setProg }) {
    const route = useRouter();

    return (
        <div className="d-flex justify-content-md-center">
            <div className={styleUser.box_menu}>
                <div className={styleUser.modalbody_menu} >
                    <div className={styleUser.cont1} >
                        <Button onClick={() => { route.push('/'); }} className={styleUser.btn}>
                            <FontAwesomeIcon icon={faHome} size='2x' style={{ color: 'gray' }} /> Inicio
                        </Button>
                        <Button onClick={() => { route.push('/TriagemPaciente'); }} className={styleUser.btn}>
                            <FontAwesomeIcon icon={faVirus} size='2x' style={{ color: 'gray' }} /> Triagem
                        </Button>
                        <Button onClick={() => { route.push('/Hitorico'); }} className={styleUser.btn}>
                            <FontAwesomeIcon icon={faClipboardList} size='2x' style={{ color: 'gray' }} /> Histórico
                        </Button>
                        <Button onClick={() => { route.push('/UserPerfil');  }} className={styleUser.btn}>
                            <FontAwesomeIcon icon={faUser} size='2x' style={{ color: 'gray' }} /> Perfil
                        </Button>
                        <Button onClick={() => { route.push('/Sobre');  }} className={styleUser.btn}>
                        <FontAwesomeIcon icon={faInfoCircle} size='2x' style={{ color: 'gray' }} /> Sobre
                        </Button>

                    </div>
                    <hr className={styleUser.linhe} />

                    <Button onClick={() => { setProg(0) }} className={styleUser.btn}>
                        Sair da conta
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default Menu;