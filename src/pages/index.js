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

        <Link to='/about' className='links'>about</Link>
        <p>get to know me</p>
        <Link to='/projects' className='links'>projects</Link>
        <p>stuff i'm working on</p>
        <Link to='/maps' className='links'>maps</Link>
        <p>where i've been</p>
        <Link to='/gallery' className='links'>gallery</Link><br/>
        <p>some of my photos and videos</p>
        <Link to='/posts' className='links'>posts</Link>
        <p>Blog posts stuff im doing</p>

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
