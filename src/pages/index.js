import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Profile from '../components/profile';

import { Divider, Typography, Icon, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

const { Text, Paragraph } = Typography;

class BlogIndex extends Component {

  render() {
    const { data, location } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={location} title={siteTitle} >
        <SEO title='Home' />
        <Bio />

        <Link to='/projects' className='link m'>projects</Link>
        <p>what I'm working on</p>
        <Link to='/gallery' className='link m'>gallery</Link><br/>
        <p>photo and video</p>
        <Link to='/maps' className='link m'>maps</Link>
        <p>where I've been, where I am, and where I'm going</p>
        <Link to='/posts' className='link m'>all posts</Link>
        <p>everything</p>

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
