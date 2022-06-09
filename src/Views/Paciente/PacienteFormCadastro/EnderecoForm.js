import React, { useState, useEffect} from 'react'
import {Form , Button , Row, Col} from 'react-bootstrap'
import style from '../styles/Paciente.module.css'
import { maskCep } from '../../../Controllers/Paciente/Mask'
import { Endereco } from '../../../Models/Endereco'

function EnderecoForm({setProg, prog, setEndereco}) {

  const [cep, setCep] = useState('')
  const [lat, setlat] = useState('')
  const [log, setLog] = useState('')
  const [uf, setUf] = useState('')
  const [cidade, setCidade] = useState('')
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')

  useEffect(()=>{
      setCep(maskCep(cep))
  });

  navigator.geolocation.getCurrentPosition(function(position) {
    setlat(position.coords.latitude)
    setLog(position.coords.longitude)
  })

  const createEndereco = () =>{
      setEndereco(new Endereco(undefined, rua, cep, lat, log, uf, bairro, cidade))
      setProg(prog + 1)
  }
  return (<div className={style.box}>
            
         <Form className={style.body} >
            <h3 className={style.fh3}>Cadastro do endereço</h3>
             <Row>
                 <Col  sm="auto" md={8}>
                    <Form.Group className={style.input2} controlId="cep">
                        <Form.Label>Cep*</Form.Label>
                        <Form.Control
                         type="text" 
                         value={cep} 
                         onChange={(e)=>{
                             setCep(e.target.value)}} 
                         placeholder="00000-000" />
                    </Form.Group>
                    <Form.Group className={style.input2} controlId="uf">
                        <Form.Label>UF*</Form.Label>
                        <Form.Control type="text" 
                        placeholder="UF"
                        onChange={(e)=>{
                            setUf(e.target.value)}}  />
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group className={style.input2} controlId="cidade">
                    <Form.Label>Cidade*</Form.Label>
                    <Form.Control type="text"
                     placeholder="Cidade"
                     onChange={(e)=>{
                        setCidade(e.target.value)}}  />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm="auto" md={12}>
                    <Form.Group className={style.input2} controlId="rua">
                            <Form.Label>Rua</Form.Label>
                            <Form.Control type="Text"
                             placeholder="Rua"
                             onChange={(e)=>{
                                setRua(e.target.value)}}  />
                    </Form.Group>
                    <Form.Group className={style.input2} controlId="bairro">
                            <Form.Label>Bairro*</Form.Label>
                            <Form.Control type="text"
                             placeholder="bairro"
                             onChange={(e)=>{
                                setBairro(e.target.value)}}  />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Button className={style.button} onClick={()=>{createEndereco()}}>
                    Continuar
                </Button> 
            </Row>
        </Form>
</div>);
}

export default EnderecoForm;
