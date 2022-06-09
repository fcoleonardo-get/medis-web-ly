import style from './Paciente/styles/Paciente.module.css';
import Image from 'next/image';
import { Button } from 'react-bootstrap';


export default function Modal({prog,setProg , textbnt, img , textCard, subtitle}) {
    return (
        <div className="d-flex justify-content-md-center">
            <div className={style.modal}>
                <div className={style.modalbody}>
                <Image src={img} alt=''/>
                <h2 className={style.fh2}>{textCard}</h2>
                <p className={style.p}>{subtitle}</p>
                <Button onClick={()=>{setProg(prog+1)}} className={style.btn}>{textbnt}</Button>
                </div>
            </div>   
        </div>
        
    );
  }
