import { useState } from 'react'
import style from './styles/login.module.css'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import { Button, Form } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { login } from '../../Controllers/apimedis'
import useAppData from '../../data/hook/useApiData'




export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [isInvalid, setIsInvalid] = useState(false)
    const route = useRouter()
    const { saveUser } = useAppData()
    

    const singin = async () => {
        try{
          const response = await login(email,senha)
            if(response.status === 200){
                setIsInvalid(false)
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("user_id", response.data.user.id)
                const dataUser = response.data.user
                saveUser(dataUser)
                route.push('UserPerfil');
            }  

        }catch(error){
            setIsInvalid(true)
        }
        
    }

    return (
        <div className="d-flex justify-content-md-center">
            <div className={style.modal}>
                <div className={style.modalbody}>

                    <div >
                        <Image src={logo} alt='logo' width={178} height={50} />
                    </div>

                    <Form method="POST">
                        <Form.Group className={style.input} controlId="Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                               type="email"
                               placeholder="Email"
                               required 
                               onChange={(e)=>{setEmail(e.target.value)}}
                               isInvalid={isInvalid}
                            />
                             <Form.Control.Feedback type="invalid">
                                 Por favor verificar se seu email esta correto
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className={style.input} controlId="Password2">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                               type="password"
                               placeholder="Senha"
                               required 
                               onChange={(e)=>{setSenha(e.target.value)}}
                               isInvalid={isInvalid}
                            />
                            <Form.Control.Feedback type="invalid">
                              Por favor verificar sua senha
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                        <div className="my-1">
                            <Button className={style.button} onClick={()=>{route.push('Account')}}>Esqueceu a senha?</Button>
                        </div>
                    <div className="my-3">
                        <Button onClick={() => { singin() }} className={style.btn}>Entrar</Button>
                        <p className={style.p}> Não possui uma conta? </p>
                        <Button onClick={() => { route.push('CadastroPaciente') }} className={style.btn}>Cadastre-se</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
