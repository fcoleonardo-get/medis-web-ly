import React,{useState, useEffect} from 'react';
import { Button, Form } from 'react-bootstrap';
import styleUser from './styles/user.module.css';
import { maskTel } from '../../Controllers/Paciente/Mask';
import useAppData from '../../data/hook/useApiData';
import { User } from '../../Models/User';
import { updateUser } from '../../Controllers/apimedis';



function UpdatePerfil({ setProg }) {
    const { user , saveUser } = useAppData()
    const [tel, setTel] = useState(user.phone);
    const [fullname, setFullname] = useState(user.full_name)
    const [nascimento, setNacimento] = useState(user.birth_date)
    const [peso, setPeso] = useState(user.peso)
    const [altura, setAltura] = useState(user.altura)


    useEffect(()=>{
        setTel(maskTel(tel));
    })

    async function atualizarUsuario(){
        const paciente = new User().toClass(user)
        paciente.setFullName(fullname)
        paciente.setPhone(tel)
        paciente.setDataNascimento(nascimento)
        paciente.setPeso(peso)
        paciente.setAltura(altura)

        try{
            const response = await updateUser(paciente)
            if(response.status === 200){
                saveUser(response.data)
                location.reload()  
            }
        }catch(error){

        }
    }

    return (
        <div className="d-flex justify-content-md-center">
            <div className={styleUser.modalupdate}>
                <div className={styleUser.modalbody}>
                    <div>
                        <Form>
                            <Form.Group className={styleUser.input} controlId="Name">

                                <Form.Label>Nome Completo</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Seu Nome"
                                value={fullname}
                                onChange={(e)=>{setFullname(e.target.value)}}
                                required
                                 />
                            </Form.Group>
                            <Form.Group className={styleUser.input} controlId="Telephone">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control 
                                type="tel" 
                                value={tel}
                                onChange={(e)=>{setTel(e.target.value)}}
                                placeholder="(XX)9XXXX-XXXX"
                                required
                                 />
                            </Form.Group>
                            <Form.Group className={styleUser.input} controlId="Birth">
                                <Form.Label>Data de Nascimento</Form.Label>
                                <Form.Control 
                                type="date" 
                                placeholder="Sua data de nascimento"
                                value={nascimento}
                                onChange={(e)=>{setNacimento(e.target.value)}}
                                required
                                 />
                            </Form.Group>
                            <Form.Group className={styleUser.input} controlId="Weight">
                                <Form.Label>Peso</Form.Label>
                                <Form.Control 
                                 type="number"
                                 placeholder="Seu peso"
                                 value={peso}
                                 onChange={(e)=>{setPeso(e.target.value)}}
                                 required
                                  />
                            </Form.Group>
                            <Form.Group className={styleUser.input} controlId="Height">

                                <Form.Label>Altura</Form.Label>
                                <Form.Control 
                                 type="number"
                                 placeholder="Sua altura"
                                 value={altura}
                                 onChange={(e)=>{setAltura(e.target.value)}}
                                 required
                                  />
                            </Form.Group>
                        
                        <div className="my-5 d-flex justify-content-center">
                            <Button  type="submit" onClick={() => { atualizarUsuario() }} className={styleUser.button}>Confirmar</Button>
                        </div>
                    </Form>
                </div>
                </div>
            </div>
        </div>
    );
}

export default UpdatePerfil;
