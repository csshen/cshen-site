import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import { ReactPhotoCollage } from 'react-photo-collage';
import { Typography } from 'antd';

import { rhythm, scale } from '../../utils/typography';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

import I00 from '../../../content/gallery/switzerland/img-0038.jpg';
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

const { Title } = Typography;

class Switzerland extends Component {
  render() {
    const { location, data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const pageTitle = 'Switzerland';

    const setting = {
      width: rhythm(28),
      height: [
        '250px',
        '150px',
        '200px',
        '150px',
        '400px',
        '200px',
        '400px',
        '200px'
      ],
      layout: [1, 3, 2, 3, 1, 2, 1, 2],
      photos: [
        { src: I00 },
        { src: I05 }, { src: I13 }, { src: I15 },
        { src: I12 }, { src: I11 },
        { src: I04 }, { src: I09 }, { src: I07 },
        { src: I08 },
        { src: I10 }, { src: I14 },
        { src: I03 },
        { src: I06 }, { src: I16 }
      ],
      showNumOfRemainingPhotos: false
    };

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title={pageTitle} />
        <Title>{ pageTitle }</Title>
        <ReactPhotoCollage {...setting} />
      </Layout>
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
