import React from 'react';
import { Button } from 'react-bootstrap';
// import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styleUser from './styles/user.module.css';
import { faInfoCircle, faListUl, faPen, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import useAppData from '../../data/hook/useApiData';

function Perfil({ setProg }) {
  const { user } = useAppData()

  return (
    <div className="d-flex justify-content-md-center" id="perfil">
      <div className={styleUser.modal}>
        <div className={styleUser.modalbody}>
          <div className={styleUser.row}>
            <div className={styleUser.userimgbox}>
              <FontAwesomeIcon icon={faUser} size='4x' style={{ color: 'gray' }} />
            </div>
            <div>
              <h1 className={styleUser.h1}>{user.full_name}</h1>
              <p className={styleUser.p} style={{textAlign:"left"}}>{user.email}</p>
            </div>          
            <div>
          </div>
          </div>
          <div className={styleUser.cont1}>
          <div>
            <h1 className={styleUser.h1}>Opções</h1>
          </div>      
            <Button onClick={() => { setProg(1) }} className={styleUser.btn}>
              <FontAwesomeIcon icon={faPen} size='2x' style={{ color: 'gray' }} /> Editar Perfil
            </Button>
            <Button onClick={() => { setProg(2) }} className={styleUser.btn}>
              <FontAwesomeIcon icon={faInfoCircle} size='2x' style={{ color: 'gray' }} /> Aviso Legal
            </Button>
            <Button onClick={() => { setProg(3) }} className={styleUser.btn}>
              <FontAwesomeIcon icon={faListUl} size='2x' style={{ color: 'gray' }} /> Critérios de Agravamentos
            </Button>
            <Button onClick={() => { setProg(4) }} className={styleUser.btn}>
              <FontAwesomeIcon icon={faSignOutAlt} size='2x' style={{ color: 'gray' }} /> Sair
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
