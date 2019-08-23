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
      let breadcrumbs = location.pathname.split('/');
      breadcrumbs = breadcrumbs.filter((elem) => elem !== '');

      // fixed nested links at some point
      const nav = breadcrumbs.map((page, i) => {
        let url = `/${page}`;

        let crumb = page.split('-')
          .map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1))
          .join(' ');

        if (i === breadcrumbs.length - 1) {
          return (<Breadcrumb.Item>{ crumb }</Breadcrumb.Item>);
        }
        return (<Breadcrumb.Item>
          <Link to={url}>{ crumb }</Link>
        </Breadcrumb.Item>);
      });

      header = (
        <>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to='/'><Icon type='home' />{' '}Home</Link>
          </Breadcrumb.Item>
          { nav }
        </Breadcrumb>
        <Divider />
        </>
      );
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
      <header>{header}</header>
      <main>{children}</main>
      <footer style={{textAlign: 'center'}}>
        © {new Date().getFullYear()} Christopher Shen
      </footer>
      </div>
    )
  }
}

export default Layout
