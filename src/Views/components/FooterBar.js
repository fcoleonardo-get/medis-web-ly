import React from 'react';
import style from "../styles/main.module.css"

function FoosterBar() {
    return (
        <footer className={style.footerbar}>
            <div className="container">
                <p className={style.a}>
                    Acesse o Aplicativo na Play Store <a href="https://play.google.com/store/apps/details?id=com.medis_app" target="_blank" rel="noreferrer">MeDis</a>
                    <p>Desenvolvido por <a href="https://gpsics.ufersa.edu.br/" target="_blank" rel="noreferrer">GPSiCS</a></p>
                </p>
                <p>&copy; Copyright 2021</p>

            </div>
        </footer>
    );
}

export default FoosterBar;