import React, { useState } from 'react';
import { Button , Form } from 'react-bootstrap';
import style from '../styles/Paciente.module.css';
import { isequalpassword } from '../../../Controllers';

function SenhaForm({prog, setProg, user, setUser}) {
    const[senha1, setSenha1] = useState('');
    const[senha2, setSenha2] = useState('');
    const[help, sethelp] = useState(false);

    const handlePassword = (e) =>{
        e.preventDefault();

        if(isequalpassword(senha1,senha2) && senha1.length > 5 && senha2.length > 5){
            setUser(user.updatePassword(senha1))
            setProg(prog + 1);
        }else{
            setProg(prog);
            sethelp(true);
        }
    }

  return (
  <div className="d-flex justify-content-md-center">
  <div className={style.modal}>
        <div className={style.modalbody}>
            <p>Escolha uma senha de no mínimo 6 caracteres.
                Tente evitar senhas fracas ;)</p>
                <Form method="POST" onSubmit={(e)=>{handlePassword(e)}}>
                    <Form.Group className={style.input} controlId="Password">
                        <Form.Label>Senha*</Form.Label>
                        <Form.Control type="password" placeholder="Senha" autoComplete={senha1} onChange={(e)=>{setSenha1(e.target.value)}} required />
                        {help ? <Form.Text className="text-danger">
                            Senha invalida
                        </Form.Text>: <></> }
                        
                    </Form.Group>
                    <Form.Group className={style.input} controlId="Password2">
                        <Form.Label>Confirmar Senha*</Form.Label>
                        <Form.Control type="password" placeholder="Confirmar Senha" autoComplete={senha2} onChange={(e)=>{setSenha2(e.target.value)}} required />
                        {help ? <Form.Text className="text-danger">
                            Senha invalida
                        </Form.Text>: <></> }
                    </Form.Group>
                   <div className="my-5">
                        <Button className={style.btn} type="submit">Criar Senha</Button>  
                   </div> 
                </Form>
        
        </div>
  </div>   
</div>);
}

export default SenhaForm;
