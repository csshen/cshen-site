/*
import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { Typography, Divider, Card } from 'antd';

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

class Projects extends Component {
  render() {
    const { location, data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title='projects' />
        <Title>Projects</Title>
        <Card
          hoverable
          style={{ width: 150 }}
          cover={<img alt="example" src="https://a.pololu-files.com/picture/0J3125.1200.jpg" />}
        >
          <Meta title="Mbed stuff" description="www.instagram.com" />
        </Card>
      </Layout>
    );
  }
}

export default Projects;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
*/
