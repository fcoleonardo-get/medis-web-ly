import React,{ useState } from 'react';
import style from './index.module.css'
import { Form , Button} from 'react-bootstrap'
import { recuperarSenha } from '../../Controllers/apimedis'
import { useRouter } from 'next/router'

function AccountForm() {
    const [email, setEmail] = useState('')
    const route = useRouter()

    const enviar = async () =>{
        const response = await recuperarSenha(email)
        if(response.status == 201){
            route.push('Login')
        }
    }

  return (<div className={style.container}>
            <h3>Informe o email para recuperar senha</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} required />
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={()=>{enviar()}}>
                Enviar
            </Button>
        </div>);
}

export default AccountForm;