import React  from 'react';
import Image from 'next/image';
import style from './styles/triagem.module.css';
import { Button , ProgressBar } from 'react-bootstrap';
import { salveResposta } from '../../Controllers/apimedis'

function TragemCard({color,dado,tProg,setTprog}) {

  const PostResposta = async (resposta) =>{
        const res = await salveResposta(dado.id, resposta)
        if(res.status === 201){
           setTprog(tProg + 1)
        }    
  }
  
  return (<div>
            <div className={style.barra} >
                <ProgressBar striped now={tProg*10} label={`${tProg*10}%`}  /> 
            </div>
            
            <div className={style.card} style={{backgroundColor:color}}>

                    <div className={style.cardHead}>
                        <Image loader={()=> dado.imagem} src={dado.imagem} alt="card"  className="my-2" width={100} height={100} />
                    </div>
                    <div className={style.triangulo}></div>
                    <div className={style.cardBody}>
                      <h2>{dado.titulo}</h2>
                      <p>{dado.descricao}</p>  
                    </div>

                    <div className={style.cardFooter}>
                      <Button onClick={()=>{PostResposta(true)}} className={style.cardButton}>Sim</Button>
                      <Button onClick={()=>{PostResposta(false)}} className={style.cardButton}>Não</Button>
                    </div>
                  </div>
          </div>);
}

export default TragemCard;
