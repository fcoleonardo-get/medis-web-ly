import React, { useState } from "react"
import Modal from "../Modal"
import SenhaForm from "./PacienteFormCadastro/SenhaForm"
import Medidasform from "./PacienteFormCadastro/Medidasform"
import EnderecoForm from "./PacienteFormCadastro/EnderecoForm"
import PacienteFormCadastro from "./PacienteFormCadastro/usuarioForm"
import img_ok from '../../../public/ok.png'
import img_dom from '../../../public/domain.png'
import { User } from '../../Models/User'
import { Endereco } from '../../Models/Endereco'


const ProgressCadastro = ({prog, setProg}) => {

    const [user, setUser] = useState(new User())
    const [endereco, setEndereco] = useState(new Endereco())
  
    
 
    switch(prog) {
    
      case 0: return <PacienteFormCadastro
                        prog={prog}
                        setProg={setProg} 
                        setUser={setUser}
                        />
                        
      case 1:   return <Modal 
                        prog={prog}
                        setProg={setProg} 
                        img={img_ok} 
                        textbnt="Criar Senha" 
                        textCard="Tudo certo, Fulano. Já confirmamos os dados iniciais"
                        subtitle="O próximo passo é criar a senha para acessar
                        o sistema"/>;

      case 2:   return <SenhaForm
                        prog={prog}
                        setProg={setProg}
                        user={user}
                        setUser={setUser}
                        />;

      case 3:   return <Modal
                        prog={prog}
                        setProg={setProg}
                        img={img_dom} 
                        textbnt="Continuar" 
                        textCard="Ótimo, agora vamos cadastrar seu endereço :)"
                        subtitle="" 
                        />;

      case 4:  return <EnderecoForm
                        prog={prog} 
                        setProg={setProg}
                        setEndereco={setEndereco}/> 

      case 5: return <Medidasform
                        user={user}
                        endereco={endereco} />
    }
}

export default ProgressCadastro
