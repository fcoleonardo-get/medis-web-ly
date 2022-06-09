import React ,{ useState, useEffect} from 'react'
import { Button , Form } from 'react-bootstrap'
import style from '../styles/Paciente.module.css'
import { maskMedi , maskNumber} from '../../../Controllers/Paciente/Mask'
import { createEndereco, createUser} from '../../../Controllers/apimedis'
import { useRouter } from 'next/router'

function Medidasform({user, endereco}) {
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const route = useRouter()

    useEffect(()=>{
        setPeso(maskMedi(peso));
        setAltura(maskNumber(altura));
    });

    const handleMedidas = async (e) =>{
        e.preventDefault()
        try{
            const novoUser = user.updateMedidas(+peso, +altura)
            const response = await createUser(novoUser)
            if(response.status === 201){
                const novoEndereco = endereco.updateUser(response.data.id)
                const res = await createEndereco(novoEndereco)
                if(res.status == 201){
                    route.push('/Login')
                }
            }
        }catch(error){
            console.log(error)
        }
       
    }

  return (<div className="d-flex justify-content-md-center">
  <div className={style.modal}>
        <div className={style.modalbody}>
                 <h2 className={style.h2}>Informações</h2>
                <Form method="POST" onSubmit={(e)=>{handleMedidas(e)}}>
                    <Form.Group className={style.input} controlId="text">
                        <Form.Label>Peso*</Form.Label>
                        <Form.Control
                            type="number" 
                            value={peso} 
                            onChange={(e)=>{setPeso(e.target.value)}}
                            placeholder="Peso"
                            min={0} 
                            required/>
                    </Form.Group>
                    <Form.Group className={style.input} controlId="Password2">
                        <Form.Label>Altura*</Form.Label>
                        <Form.Control
                            type="number"
                            value={altura} 
                            onChange={(e)=>{setAltura(e.target.value)}}
                            placeholder="Altura" 
                            required
                            />
                    </Form.Group>
                    <div className="my-4">
                         <Button className={style.btn} type="submit">Continuar</Button>   
                    </div>
                </Form> 
        </div>
  </div>   
</div>);
}

export default Medidasform;
