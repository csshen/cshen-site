import React, { Component } from 'react';
import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import { Breadcrumb, Typography, Icon, Divider } from 'antd';
import 'antd/dist/antd.css';

const { Title } = Typography;

class Layout extends Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;
    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 style={{ marginTop: 0 }}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>);
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(28),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer style={{textAlign: 'center', marginTop: '1em'}}>
          © {new Date().getFullYear()} Christopher Shen
        </footer>
      </div>
    );
  }
}

export default Layout;
