import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import LightboxGallery from './lightbox-gallery';
import Bio from './bio';
import Layout from './layout';
import SEO from './seo';
import { rhythm, scale } from './../utils/typography';

class GalleryPage extends Component {
  render(props) {
    const { location, data, photos, pageTitle } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title={pageTitle} />
        <h1
          style={{
            marginTop: rhythm(1),
            marginBottom: 0,
          }}
        >
          {pageTitle}
        </h1>
        <LightboxGallery photos={photos}/>
      </Layout>
    );
  }
}

export default GalleryPage;
