import React from 'react'
import style from './styles/maps.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import MapChart from './MapChart'

function MapaCalor() {
  
 return (<div className={style.container} >
            <div className="d-flex justify-content-md-center p-3">
               <p className={style.fp} >Mapa dos casos</p>
            </div>
            <div className="d-flex justify-content-md-center">
                  <div className={style.map}>
                     <MapChart />
                  </div>
              </div>
            <div className="d-flex justify-content-md-center p-3">
              <p className={style.fp} >Mapa Completo <FontAwesomeIcon icon={faArrowRight} /></p>             
            </div>  
        </div>);
}


export default MapaCalor;