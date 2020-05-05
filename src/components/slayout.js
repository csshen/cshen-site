import React from 'react';
import Sidebar from './sidebar';
import style from './slayout.module.scss';

const SLayout = ({ location, title, children, padding='2em' }) => {
  //const rootPath = `${__PATH_PREFIX__}/`;
  return (
    <div className={style.flex}>
      <Sidebar location={location}/>
      <main className={style.content} style={{padding: padding}}>{ children }</main>
    </div>
  );
}

export default SLayout;
