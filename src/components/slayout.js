import React from 'react';
import Sidebar from './sidebar';
import style from './slayout.module.scss';

const SLayout = ({ location, title, children }) => {
  //const rootPath = `${__PATH_PREFIX__}/`;
  return (
    <div className={style.flex}>
      <Sidebar location={location}/>
      <main className={style.content}>{ children }</main>
      <footer className={style.footer}>© 2020 Chris Shen · Last Updated: Apr 09 2020</footer>
    </div>
  );
}

export default SLayout;
