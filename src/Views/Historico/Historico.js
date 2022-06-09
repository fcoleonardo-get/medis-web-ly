import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import style from './styles/historico.module.css'
import image from '../../../public/img/image1.png'
import { linhaDoTempo } from '../../Controllers/apimedis'
import { formatDate , formatDateHora } from '../../Controllers/index'


function Historico() {
    const [data, setData] = useState([])

    useEffect(()=>{
        getLinhaDoTempo()
    },[])

    const getLinhaDoTempo = async() =>{
        const res =  await linhaDoTempo()
        if(res.status == 200){
            setData(res.data)
        }

    }

    const HandleHistorico = () =>{
        let list = data.map((item, index)=>{
            return(
                <div key={index} className={style.row}>
                    <div className={style.boximg}>
                        <div className={style.column1}>
                            <p className={style.p1}>{formatDate(item.datahora_cadastro)}</p>
                            <p className={style.p1}>{formatDateHora(item.datahora_cadastro)}</p>
                        </div>
                        <div className={style.column2}>
                            <Image src={image} alt="" width={57} height={57} />
                        </div>
                    </div>
                    <div className={style.column3}>
                        <p className={style.p1} >{item.title}</p>
                        <p className={style.p2} >{item.description}</p>
                    </div>

                </div> 
            )
        })
        return(<>
        {list}
        </>)

    }

    return (
        <div className="d-flex justify-content-md-center">
            <div className={`container ${style.historico}`}>               
                {HandleHistorico()}                
            </div>
        </div >
    );

}

export default Historico;