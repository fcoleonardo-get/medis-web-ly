import Header from '../Views/components/Header'
import { useState } from 'react'
import AdminFormCadastro from '../Views/Admin/adminFormCadastro'
import { Container } from 'react-bootstrap'

export default function CadastroAdmin(){
    const [prog, setProg] = useState(0)

    return <>
          <Header prog={prog} setProg={setProg} text="Cadastro Admin" />
          <Container>
            <AdminFormCadastro /> 
          </Container>
    </>
}