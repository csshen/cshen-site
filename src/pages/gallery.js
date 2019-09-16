import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import { Typography, Icon } from 'antd';

import Layout from '../components/layout';
import SEO from '../components/seo';
import gallery_list from '../config/gallery-list';

const { Title, Paragraph, Text } = Typography;

class Gallery extends Component {
  render() {
    const { location, data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const links = gallery_list.map((obj) =>
      <div>
        <Link to={obj.url} className='plain-link'>
          <Icon type='pushpin' /> {obj.name}
        </Link>
      </div>
    );

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title='Gallery' />
        <Title>Gallery</Title>
        { links }
      </Layout>
    );
  }
}

export default Gallery;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
