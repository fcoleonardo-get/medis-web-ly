import React from 'react';
import { useRouter } from 'next/router'; 
import Dica1 from '../Views/Prevencao/Dica1';
import Dica2 from '../Views/Prevencao/Dica2';
import Dica3 from '../Views/Prevencao/Dica3';
import Dica4 from '../Views/Prevencao/Dica4';

function Prevencao() {
  const route = useRouter();
 
  switch(route.query.Prevencao){
    case 'PrevencaoDica1': return <Dica1/>
    case 'PrevencaoDica2': return <Dica2/>
    case 'PrevencaoDica3': return <Dica3/>
    case 'PrevencaoDica4': return <Dica4/>
    default : return <div/>

  }
}

export default Prevencao;
