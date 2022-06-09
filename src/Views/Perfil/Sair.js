import React from 'react'
import { Button } from 'react-bootstrap'
import Image from 'next/image'
import style from '../Paciente/styles/Paciente.module.css'
import styleUser from './styles/user.module.css'
import img_close_perfil from '../../../public/img_close_perfil.png'
import useAppData from '../../data/hook/useApiData'
import { useRouter } from 'next/router'

function Sair({ setProg }) {

    const{ saveUser } = useAppData()
    const route = useRouter()

    function singout(){
        localStorage.removeItem('token')
        localStorage.removeItem('user_id')
        saveUser({})
        route.push('/')
    }

    return (
        <div>
            <div className={styleUser.containerSair}>
                <div className={styleUser.modalbody_sair} >
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className={style.h1}>Sair</h1>

                        <Button onClick={() => { setProg(0) }} className={styleUser.btn_close}>
                            <Image src={img_close_perfil} alt='' />
                        </Button>
 
                    </div>
                   
                    <p className={styleUser.p}>
                        tem certeza que deseja sair?
                    </p>
                    <div className="d-flex justify-content-center">
                        <Button onClick={() => { singout()}} className={styleUser.btn}>
                            Sim
                        </Button>
                        <Button onClick={() => { setProg(0) }}  className={styleUser.btn}>
                            Não
                        </Button>   
                    </div>
                   

                </div>


            </div>
        </div>

    );
}

export default Sair;
