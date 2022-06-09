import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import style from './style/admin.module.css'
import { useState, useEffect } from 'react'
import { maskTel , maskCpf } from '../../Controllers/Paciente/Mask'

export default function AdminFormCadastro(){

    const [tel, setTel] = useState('')
    const [cpf, setCpf] = useState('')
    

    useEffect(()=>{
            setTel(maskTel(tel)); 
            setCpf(maskCpf(cpf));
    });

    return  (<Container className="py-5 d-flex justify-content-center">
                <Row className={style.box}>
                    <Col xs={6}>
                        <h2 className={style.h2}>Nova Conta</h2>
                    </Col >
                    
                    <Form method="POST" onSubmit={(e)=>{}}>
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
                             
                                onChange={(e)=>{
                                   
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
                               
                                onChange={(e)=>{
                                     
                                    }}
                                required />

                        </Form.Group>
                        <div className="my-5 d-flex justify-content-center">
                            <Button className={style.btn} type="submit" >
                                Confirmar
                            </Button>    
                        </div>
                        
                    </Form>
                </Row>
            </Container>)
}