import React from 'react';
import Sidebar from './sidebar';
import style from './slayout.module.scss';

const SLayout = ({ location, title, children, padding='2em' }) => {
  //const rootPath = `${__PATH_PREFIX__}/`;
  return (
    <div className={style.flex}>
      <Sidebar location={location}/>
      <main className={style.content} style={{padding: padding}}>{ children }</main>
      <footer className={style.footer}>Last Updated: Apr 14, 2020<br/>© 2020 Chris Shen</footer>
    </div>
  );
}

export default SLayout;
