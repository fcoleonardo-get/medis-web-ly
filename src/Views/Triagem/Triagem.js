import React, { useState , useEffect} from 'react';
import TragemCard from './TriagemCard';
import { useRouter } from 'next/router';
import { getPerguntas } from '../../Controllers/apimedis'
import AgravamentoForm from '../Paciente/PacienteFormCadastro/AgravamentoForm';

function Triagem() {

  const [tProg, setTprog] = useState(0)
  const cores = ["#987BBB","#4D8A82","#F26A6A","#A1A2A6","#7FA9A5","#6BBFBF","#F4CB9D","#ADDDD1","#FFCF91"]
  const [cards, setCards] = useState([])
  const route = useRouter();

  useEffect(()=>{
    perguntas()
  },[])

  if(tProg > (cards.length - 1) && cards.length > 0){
    route.push('UserPerfil');
  }

  const perguntas = async () =>{
      const res = await getPerguntas()
      if(res.status === 200){
        setCards(res.data)
      }
  }

  const handleCards = () =>{
    
    let lista = cards.map((item, index) =>{
      let corIndex = Math.floor(Math.random() * cores.length);
      return <TragemCard key={index} color ={`${cores[corIndex]}`} dado={item} tProg={tProg} setTprog={setTprog} />
    });

    
    return(<>
          {lista[tProg]}
          </>)
  }
  return(
    <div>
     {tProg < (cards.length - 1) && cards.length > 0 ? handleCards(): <AgravamentoForm />}
    </div> 
  )
}

export default Triagem;
