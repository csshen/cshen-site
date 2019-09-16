import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { Typography, Divider, Card, Icon, Avatar,
        Row, Col} from 'antd';

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
        <Row gutter={16}>
          <Col sm={24} md={12}>
          <Card title="Default size card" extra={<a href="#">More</a>}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
          </Col>
          <Col sm={24} md={12}>
          <Card title="Default size card" extra={<a href="#">More</a>}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
          </Col>
        </Row>
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
