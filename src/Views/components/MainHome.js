import React from 'react';

import style from '../styles/main.module.css';

function MainHome({ children }) {
  return (<main className={style.main}>{ children }</main>);
}

export default MainHome;