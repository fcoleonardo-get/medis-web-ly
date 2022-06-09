import React from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import styleUser from './styles/user.module.css';
import img_close_perfil from '../../../public/img_close_perfil.png';


function AvisoLegal({ setProg }) {
    return (
        <div className={styleUser.containerAviso}>
                <div className={styleUser.modal_avise}>

                    <div className={styleUser.modalbody_avise} >
                        <div className={styleUser.headModalaviso}>
                            <div style={{marginLeft:5}}>
                               <h1 className={styleUser.h1}>Aviso Legal</h1>  
                            </div>
                            <div>
                                <Button onClick={() => { setProg(0) }} className={styleUser.btn_close}>
                                    <Image src={img_close_perfil} alt='' />
                                </Button>     
                            </div>
                             
                        </div>
                        
                        <div className="p-3">
                            <p className={styleUser.text}>
                                Este aplicativo deve ser utilizado como uma alternativa ao processo de triagem de pessoas suspeitas com a COVID-19. O algoritmo de triagem para classificação do
                                paciente quanto a possibilidade de estar ou não infectado com o Sars-Cov2 foi implementado coonforme diretrizes adotadas pela Secretaria de Saúde do Município de
                                Mossoró-RN. Neste caso, os desenvolvedores não se responsabilizam pelos resultados da triagem realizada pelo aplicativo para os potenciais pacientes.
                                Esta deve servir apenas como orientação inicial, devendo cada pessoa procurar uma unidade de saúde para atendimento e avaliação do seu real estado de saúde.
                            </p>   
                            <div style={{margin:0}}>
                                <p>
                                    <a className={styleUser.a} href="www.google.com">Baixar Diretrizes</a>
                                </p>   
                            </div>
                        </div>
                        
                    </div>

                </div>
        </div>
       
    );
}

export default AvisoLegal;
