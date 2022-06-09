import React  from 'react';
import Image from 'next/image';
import style from './styles/triagem.module.css';
import { Button , ProgressBar } from 'react-bootstrap';
import { editarResposta } from '../../Controllers/apimedis'

function EditarTragemCard({color,dado,tProg,setTprog}) {

  const PatchResposta = async (resposta) =>{
        const res = await editarResposta(dado.id, resposta)
        if(res.status === 200){
           setTprog(tProg + 1)
        }    
  }
  
  return (<div>
            <div className={style.barra} >
                <ProgressBar striped now={tProg*10} label={`${tProg*10}%`}  /> 
            </div>
            
            <div className={style.card} style={{backgroundColor:color}}>

                    <div className={style.cardHead}>
                        <Image loader={()=> dado.pergunta.imagem} src={dado.pergunta.imagem} alt="card"  className="my-2" width={100} height={100} />
                    </div>
                    <div className={style.triangulo}></div>
                    <div className={style.cardBody}>
                      <h2>{dado.pergunta.titulo}</h2>
                      <p>{dado.pergunta.descricao}</p>  
                    </div>

                    <div className={style.cardFooter}>
                      <Button onClick={()=>{PatchResposta(true)}} className={style.cardButton}>Sim</Button>
                      <Button onClick={()=>{PatchResposta(false)}} className={style.cardButton}>Não</Button>
                    </div>
                  </div>
          </div>);
}

export default EditarTragemCard;
