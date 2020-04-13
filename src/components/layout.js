import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import { rhythm, scale } from '../utils/typography';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import style from './layout.module.css';

const Layout = ({ location, title, children }) => {
    //const rootPath = `${__PATH_PREFIX__}/`;
    return (
      <div style={{
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        maxWidth: '700px',
        width: '100%',
        margin: 'auto'
      }}>
        <header><Header /></header>
        <main>{ children }</main>
        <footer style={{textAlign: 'center', marginTop: '1em'}} />
      </div>
    );
  }


export default Layout;
