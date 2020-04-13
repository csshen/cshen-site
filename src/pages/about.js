import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Row, Col } from 'antd';
import SLayout from '../components/slayout';
import SEO from '../components/seo';
import style from './about.module.css';

const About = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <SLayout location={location.pathname} title={siteTitle}>
      <SEO title='About' />
      <span className='page-title'>ABOUT</span>&ensp;&ensp;
      <span className='page-subtitle'>{' / əˈbaʊt /'}</span>

      <Row gutter={16}>
        <Col xs={24} lg={14}>
        <p id={style.summary}>
          {`Hi there, I'm Chris Shen, an incoming Software Development Engineer
           at Amazon!  I just finished studying Computer Engineering at `}
          <a href='' className='link'>Georgia Tech</a> and was an intern at
          <a href='https://www.jpl.nasa.gov/' className='link'>NASA Jet Propulstion Laboratory</a>

          in Pasadena this past summer.

          Get in Touch

          check out this
        </p>
      </Col>
        <Col xs={24} lg={10}>
          <Img fluid={data.file.childImageSharp.fluid} />
        </Col>

      </Row>
    </SLayout>
  );
}

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: {eq: "profile.jpg"}, sourceInstanceName: {eq: "assets"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  }
`;
