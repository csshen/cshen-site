import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { Typography, Divider } from 'antd';
const { Title, Paragraph, Text } = Typography;

class About extends Component {
  render() {
    const { location, data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title='About' />
        <Title>About</Title>
        <Link to={location.pathname + '/maps'}>Maps</Link>
      </Layout>
    );
  }
}

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
