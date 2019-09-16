import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import GalleryPage from '../../components/gallery-page';

import I00 from '../../../content/gallery/singapore/IMG_6571.jpg';
import I01 from '../../../content/gallery/singapore/IMG_6583.jpg';

class Singapore extends Component {

  render() {
    const { location, data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const photos = [
      { src: I00, width: 3, height: 2 },
      { src: I01, width: 3, height: 2 }
    ];

    return (
      <GalleryPage
        photos={photos}
        pageTitle='Singapore'
        location={location}
        data={data}
      />
    );
  }
}

export default Singapore;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
