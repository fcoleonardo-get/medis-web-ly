import React ,{useState, useEffect } from 'react';
import style from '../styles/usuarioForm.module.css';
import { Row, Container , Form, Button, Col} from 'react-bootstrap';
import { maskTel , maskCpf} from '../../../Controllers/Paciente/Mask';
import { User } from '../../../Models/User'

function FormCadastro({prog, setProg , setUser}) {

  const [tel, setTel] = useState('')
  const [cpf, setCpf] = useState('')
 

  useEffect(()=>{
         setTel(maskTel(tel)); 
         setCpf(maskCpf(cpf));
  });

  const createUser = (e) =>{
       const form = e.target
       const fullname = form[0].value
       const cpf = form[3].value
       const email = form[2].value
       const birth_date = form[4].value.split('-').reverse().join('/') 
       const phone = form[5].value
       const sexo = form[1].value
       const password = null
       const novoUser = new User(fullname, cpf, email, birth_date, phone, password, sexo)
       setUser(novoUser)
       setProg(prog+1)
  }

  return (
    <Container className="py-5 d-flex justify-content-center">
        <Row className={style.box}>
             <Col xs={6}>
                 <h2 className={style.h2}>Nova Conta</h2>
             </Col >
             
            <Form method="POST" onSubmit={(e)=>{createUser(e)}}>
                <Form.Group className={style.input}  controlId="nome">
                    <Form.Label>Nome Completo*</Form.Label>
                    <Form.Control 
                         type="text"
                         name="nome"
                         placeholder="Nome Completo"
                         required />

                </Form.Group>

                <Form.Group className={style.input} >
                    <Form.Label>Selecione Seu Sexo*</Form.Label>
                    <Form.Select
                        aria-label="selecione o sexo"
                        name="sexo"
                        required >

                        <option></option>
                        <option value="MASCULINO">Masculino</option>
                        <option value="FEMININO">Feminino</option>

                    </Form.Select>

                </Form.Group>

                <Form.Group className={style.input} controlId="email">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control
                         type="email"
                         name="email"
                         placeholder="name@example.com"
                         required />

                </Form.Group>

                <Form.Group className={style.input}  controlId="cpf">
                    <Form.Label>CPF*</Form.Label>
                    <Form.Control 
                         type="text"
                         name="cpf"
                         placeholder=""
                         value={cpf}
                         onChange={(e)=>{
                             setCpf(e.target.value)   
                            }}
                         required />

                </Form.Group>

                <Form.Group className={style.input} controlId="data">
                    <Form.Label>Data de Nascimento*</Form.Label>
                    <Form.Control
                         type="date"
                         name="nascimento"
                         placeholder=""
                         required />

                </Form.Group>

                <Form.Group className={style.input}  controlId="telefone">
                    <Form.Label>Telefone*</Form.Label>
                    <Form.Control
                         type="text"
                         placeholder=""
                         name="telefone"
                         value={tel}
                         onChange={(e)=>{
                             setTel(e.target.value)   
                            }}
                         required />

                </Form.Group>
                <div className="my-5 d-flex justify-content-center">
                    <Button className={style.btn} type="submit" >
                        Continuar
                    </Button>    
                </div>
                
            </Form>
        </Row>
    </Container>
  );
}

export default FormCadastro;
