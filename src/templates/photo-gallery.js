import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SLayout from '../components/slayout';
import SEO from '../components/seo';
import style from '../styles/photo-gallery.module.scss';


const PhotoGalleryTemplate = ({ pageContext, location, data }) => {
    //const post = this.props.data.markdownRemark;

    const siteTitle = data.site.siteMetadata.title;
    const header = pageContext.title.toLowerCase()
      .split('-')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');

    const imgs = data.allFile.edges.map(elem => {
      return (
        <div>
          <Img fluid={{ ...elem.node.childImageSharp.fluid, aspectRatio: 1}} className={style.thumbnail}/>
        </div>);
     }
    );

    return (
      <SLayout location={location.pathname} title={siteTitle}>
        <SEO title={pageContext.title} />
        <div className={style.grid}>{ imgs }</div>
      </SLayout>
    );
}

export default PhotoGalleryTemplate;

export const pageQuery = graphql`
  query GalleryPost($title: String) {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: {relativeDirectory: {eq: $title}, extension: {regex: "/jpg|png/"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
