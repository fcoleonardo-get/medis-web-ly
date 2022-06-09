import React from 'react';
import {Alert} from 'react-bootstrap';


function Alerta({variant,show,text}) {

    if(show){
       return (<>
            <Alert variant={variant}>
                <p>
                   {text}
                </p>
            </Alert>  
         </>); 
    }else{
        return <></>;
    }
  
};

export default Alerta;