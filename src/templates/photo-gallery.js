import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SLayout from '../components/slayout';
import SEO from '../components/seo';
import style from '../styles/photo-gallery.module.scss';


const PhotoGalleryTemplate = ({ pageContext, location, data }) => {
  const siteTitle = data.site.siteMetadata.title;
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
            fluid(quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
