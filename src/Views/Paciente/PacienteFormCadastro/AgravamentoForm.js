import React , { useEffect, useState }from 'react';
import {Form , Button , Row} from 'react-bootstrap';
import style from '../styles/Paciente.module.css';
import { listaAgravamentos , insertAgravamentos, salveTriagem} from '../../../Controllers/apimedis'
import { getAgravamentosIds } from '../../../Controllers/index'
import { useRouter } from 'next/router'

function AgravamentoForm({setProg}) {

    const [agravamentos, setAgravamentos] = useState([])
    const route = useRouter()
   
    useEffect(()=>{
        getAgravamentos()
    },[]);

    const getAgravamentos = async () =>{
        const token = localStorage.getItem('token')
        try{
            const response = await listaAgravamentos(token) 
            if(response.status === 200){
                setAgravamentos(response.data)
            }
        }catch(error){
           console.log(error)
        }  
    }
    
    const PostAgravamentos = async (e) =>{
        e.preventDefault()
        const agravamentosIds = getAgravamentosIds()
        const response = await insertAgravamentos(agravamentosIds)
        if(response.status == 201){
            const res = await salveTriagem()
            if(res.status == 201){
                if(setProg){
                    setProg(0)
                }else{
                    route.push('Historico')
                }
            }
        }
    }
    
    const lista = (array)=>{
        let result = array.map((item, index)=>{
           return (<div key={index} className={style.rowcheck}>
                            <Form.Group  className={style.checkbox} controlId={index}>
                                <Form.Check name="agravamento" value={item.id} type="checkbox" label={item.descricao} />
                            </Form.Group>
                    </div>);     
        });
        return(<>{result}</>);
    }
  return (<div className={style.box}>
                <Form className={style.body} onSubmit={(e)=>{ PostAgravamentos(e)}}>
                    <Row>
                        <div className={style.colbox}>
                         {lista(agravamentos)}
                        </div>
                    </Row>
                    <Row className="justify-content-md-center">
                       <Button type="submit" className={style.button}>
                             Salvar
                        </Button>
                    </Row>
                </Form>
  </div>);
}

export default AgravamentoForm;
