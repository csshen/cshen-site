import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Profile from '../components/profile';

import { Divider, Typography, Icon, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

const { Text } = Typography;

class BlogIndex extends Component {

  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='Home' />
        <Bio />

        <Row type='flex' justify='start' align='middle'>
          <Link to='/about' className='links'>About</Link>
          <Icon type='arrow-left' style={{ margin: '1em'}} />
          Find out more about me.
        </Row>

        <Row type='flex' justify='end' align='middle'>
        Check out some of the things I'm currently working on.
          <Icon type='arrow-right' style={{ margin: '1em'}} />
          <Link to='/projects' className='links'>Projects</Link>
        </Row>

        <Row type='flex' justify='start' align='middle'>
          <Link to='/posts' className='links'>Posts</Link>
          <Icon type='arrow-left' style={{ margin: '1em'}} />
          Blog posts stuff im doing
        </Row>
        <Profile />


      </Layout>
    )
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
