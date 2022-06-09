import React from 'react';

import style from '../styles/main.module.css';

function Background({ children }) {
  return (
    <div className={style.backgcolor}>
      <main className={style.backg}>
        {children}
      </main>
    </div>
  );
}

export default Background;