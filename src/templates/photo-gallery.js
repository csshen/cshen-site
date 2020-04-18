import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SLayout from '../components/slayout';
import SEO from '../components/seo';
import Carousel, { Modal, ModalGateway } from 'react-images';
import style from '../styles/photo-gallery.module.scss';

const PhotoGalleryTemplate = ({ pageContext, location, data }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [index, setIndex] = useState(0);

  const siteTitle = data.site.siteMetadata.title;
  const imgs = data.allFile.edges.map((elem, i) => {
    return (<div onClick={() => {setIndex(i); setModalVisibility(true);}}>
        <Img fluid={{ ...elem.node.childImageSharp.fluid, aspectRatio: 1}} className={style.thumbnail}/>
      </div>);
   });

  const fullsize = data.allFile.edges.map(elem => {
    return { source: elem.node.childImageSharp.original.src }
  });

  return (
    <SLayout location={location.pathname} title={siteTitle}>
      <SEO title={pageContext.title} />
      <ModalGateway>
        {modalVisibility ? (
          <Modal onClose={() => setModalVisibility(!modalVisibility)}>
            <Carousel views={fullsize} currentIndex={index}/>
          </Modal>
        ) : null}
      </ModalGateway>
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
            original {
              src
            }
          }
        }
      }
    }
  }
`;
