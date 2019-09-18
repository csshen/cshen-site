import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import { Typography, Icon, Divider } from 'antd';

import Layout from '../components/layout';
import SEO from '../components/seo';
import gallery_list from '../config/gallery-list';

const { Title, Paragraph, Text } = Typography;

class Gallery extends Component {
  createPushPin(country) {
    const url = '/gallery/'+country.toLowerCase().replace(/ /g, '-');
    return (
      <div>
        <Link to={url} className='black-link-r'>
          <Icon type='pushpin' /> {country}
        </Link>
      </div>
    );
  }

  render() {
    const { location, data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title='Gallery' />
        <Title level={2}>Gallery</Title>

        <Divider orientation='left'>Europe</Divider>
        {gallery_list.europe.map((country) => this.createPushPin(country))}
        <Divider orientation='left'>Asia</Divider>
        {gallery_list.asia.map((country) => this.createPushPin(country))}
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
