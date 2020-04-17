import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SLayout from '../components/slayout';
import Carousel from '../components/carousel';
import SEO from '../components/seo';
import style from '../styles/photo-gallery.module.scss';

const PhotoGalleryTemplate = ({ pageContext, location, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const imgs = data.allFile.edges.map(elem => {
    return (<div>
      <a href={elem.node.childImageSharp.original.src}>
        <Img fluid={{ ...elem.node.childImageSharp.fluid, aspectRatio: 1}} className={style.thumbnail}/>
      </a></div>);
   }
  );

  const fluids = data.allFile.edges.map(elem =>
    elem.node.childImageSharp.fluid
  );

  return (
    <SLayout location={location.pathname} title={siteTitle}>
      <SEO title={pageContext.title} />
      <div className={style.grid}>{ imgs }</div>
      {/*<Carousel fluids={fluids} />*/}
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
            original {
              src
            }
          }
        }
      }
    }
  }
`;
