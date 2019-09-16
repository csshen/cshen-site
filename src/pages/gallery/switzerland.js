import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import GalleryPage from '../../components/gallery-page';

import I00 from '../../../content/gallery/switzerland/img-0038.jpg';
import I01 from '../../../content/gallery/switzerland/img-0039.jpg';
import I02 from '../../../content/gallery/switzerland/img-0040.jpg';
import I03 from '../../../content/gallery/switzerland/img-0041.jpg';
import I04 from '../../../content/gallery/switzerland/img-0042.jpg';
import I05 from '../../../content/gallery/switzerland/img-0043.jpg';
import I06 from '../../../content/gallery/switzerland/img-0044.jpg';
import I07 from '../../../content/gallery/switzerland/img-0045.jpg';
import I08 from '../../../content/gallery/switzerland/img-0046.jpg';
import I09 from '../../../content/gallery/switzerland/img-0047.jpg';
import I10 from '../../../content/gallery/switzerland/img-0048.jpg';
import I11 from '../../../content/gallery/switzerland/img-0049.jpg';
import I12 from '../../../content/gallery/switzerland/img-0050.jpg';
import I13 from '../../../content/gallery/switzerland/img-0051.jpg';
import I14 from '../../../content/gallery/switzerland/img-0052.jpg';
import I15 from '../../../content/gallery/switzerland/img-0053.jpg';
import I16 from '../../../content/gallery/switzerland/img-0054.jpg';

class Switzerland extends Component {

  render() {
    const { location, data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const photos = [
      { src: I00, width: 3, height: 2, sizes: ['(min-width: 36em)'] },
      { src: I01, width: 3, height: 2 },
      { src: I02, width: 3, height: 2 },
      { src: I03, width: 3, height: 2 },
      { src: I04, width: 3, height: 2 },
      { src: I05, width: 3, height: 2 },
      { src: I06, width: 3, height: 2 },
      { src: I07, width: 3, height: 2 },
      { src: I08, width: 3, height: 2 },
      { src: I09, width: 3, height: 2 },
      { src: I10, width: 3, height: 2 },
      { src: I11, width: 3, height: 2 },
      { src: I12, width: 3, height: 2 },
      { src: I13, width: 3, height: 2 },
      { src: I14, width: 3, height: 2 },
      { src: I15, width: 3, height: 2 },
      { src: I16, width: 3, height: 2 }
    ];

    return (
      <GalleryPage
        photos={photos}
        pageTitle='Switzerland'
        location={location}
        data={data}
      />
    );
  }
}

export default Switzerland;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
