import React, { useEffect, useState } from 'react'
import Header from '../Views/components/Header'
import HeaderPerfil from '../Views/Perfil/HeaderPerfil'
import Perfil from '../Views/Perfil/Perfil'
import UpdatePerfil from '../Views/Perfil/UpdatePerfil'
import AvisoLegal from '../Views/Perfil/AvisoLegal'
import Agravamento from '../Views/Paciente/PacienteFormCadastro/AgravamentoForm'
import Sair from '../Views/Perfil/Sair'


function UserPerfil() {
  const [prog, setProg] = useState(0)

  const progressPerfil = () => {
    switch (prog) {
      case 0: return <>
        <HeaderPerfil text="Perfil" />
        <div className="d-flex">
          <div className="container" style={{marginTop:"90px"}}> 
            <Perfil setProg={setProg} /> 
          </div>
        </div>
      </>

      case 1: return <>
        <Header setProg={setProg} prog={prog} text="Perfil" />
        <div className="container">
          <UpdatePerfil setProg={setProg}  />
        </div>
      </>

      case 2: return <>
        <HeaderPerfil text="Perfil" />
        <div style={{marginTop:"50px"}}>
          <AvisoLegal setProg={setProg} /> 
        </div>
       
      </>

      case 3: return <>
        <Header setProg={setProg} prog={1} text="Perfil" />
        <Agravamento setProg={setProg} />
      </>

      case 4: return <>
        <HeaderPerfil  text="Perfil" />
        <div style={{marginTop:"50px"}}>
          <Sair setProg={setProg} /> 
        </div>
        
      </>
    }
  }

  return (
    <>
      {progressPerfil()}
    </>
  );
}

export default UserPerfil;
