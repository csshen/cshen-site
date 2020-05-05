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
        <Img fluid={{ ...elem.node.childImageSharp.low, aspectRatio: 1}}
             className={style.thumbnail}
             placeholderStyle={{filter: 'blur(8px)'}}/>
      </div>);
   });

   const largesize = data.allFile.edges.map(elem => {
     return { source: elem.node.childImageSharp.high.src };
   });

  return (
    <SLayout location={location.pathname} title={siteTitle}>
      <SEO title={pageContext.title} />
      <ModalGateway>
        {modalVisibility ? (
          <Modal onClose={() => setModalVisibility(!modalVisibility)}>
            <Carousel views={largesize} currentIndex={index}/>
          </Modal>
        ) : null}
      </ModalGateway>
      <div className={style.grid}>{ imgs }</div>
    </SLayout>
  );
}

export default PhotoGalleryTemplate;

export const pageQuery = graphql`
  query GalleryPost($seo: String) {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: {relativeDirectory: {eq: $seo}, extension: {regex: "/jpg|png/"}}) {
      edges {
        node {
          childImageSharp {
            low: fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
            high: fluid(quality: 100, maxWidth: 1600) {
              src
            }
          }
        }
      }
    }
  }
`;
