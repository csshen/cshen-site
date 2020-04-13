import React from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';
import style from './header.module.css';

const Header = () => {
  return (
    <div style={{ marginTop: 0, marginBottom: rhythm(0.75)}}>
      <Link className={style.nav} to={`/`}>
        <span className={style.b}>←</span>{' '}
        <span className={style.a}>go back to homepage</span>
      </Link>
    </div>
  );
}

export default Header;
