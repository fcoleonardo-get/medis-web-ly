import React, { useState } from 'react';
import LoginPerfil from "../Views/Login/Login";
import MainHome from "../Views/components/MainHome";




export default function Home() {
  const [prog, setProg] = useState(0);

  return (<div>
            <MainHome>
                <LoginPerfil setProg={setProg} prog={prog} />
            </MainHome>
          </div>)
}
