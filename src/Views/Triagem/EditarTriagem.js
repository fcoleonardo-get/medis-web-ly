import React, { useState } from 'react';
import EditarTragemCard from './EditarTriagemCard';
import AgravamentoForm from '../Paciente/PacienteFormCadastro/AgravamentoForm';



function EditarTriagem({data}) {

  const [tProg, setTprog] = useState(0)
  const cores = ["#987BBB","#4D8A82","#F26A6A","#A1A2A6","#7FA9A5","#6BBFBF","#F4CB9D","#ADDDD1","#FFCF91"]

  const handleCards = () =>{
    
    let lista = data.map((item, index) =>{
      let corIndex = Math.floor(Math.random() * cores.length);
      return <EditarTragemCard key={index} color ={`${cores[corIndex]}`} dado={item} tProg={tProg} setTprog={setTprog} />
    });

    
    return(<>
          {lista[tProg]}
          </>)
  }
  return(
    <div>
     {tProg < (data.length - 1) && data.length > 0 ? handleCards(): <AgravamentoForm />}
    </div> 
  )
}

export default EditarTriagem;
