import React , { useState, useEffect }from 'react';
import { Container } from 'react-bootstrap';
import Triagem from '../Views/Triagem/Triagem';
import Background from "../Views/components/Background";
import NavHome from "../Views/components/Navbar";
import CancelarTriagem from '../Views/Triagem/CancelarTriagem';
import EditarTriagem from '../Views/Triagem/EditarTriagem';
import { getRespostas } from '../Controllers/apimedis'
import { filterRespostaUser } from '../Controllers/index'


function TriagemPaciente() {

  const [show, setShow] = useState(false)
  const [triagem, setTriagem] = useState(true)
  const [data, setData] = useState([])

  useEffect(()=>{
    respostas()
  },[])

  const respostas = async () =>{
    const res = await getRespostas()
    if(res.status === 200){
      const data = filterRespostaUser(res.data)
      if(data.length > 0){
        setData(data)
        setTriagem(false)
      }
    }
}

  return (
    <Background>
      <NavHome triagem setShow={setShow}/>
      <Container className="d-flex flex-column justify-content-center align-items-center p-5 my-5" style={{minHeight:"100vh"}}>
           {triagem ? <Triagem /> : <EditarTriagem data={data}/>}
           <CancelarTriagem  show={show} setShow={setShow} />
      </Container>   
    </Background>);
}

export default TriagemPaciente;
