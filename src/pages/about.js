import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SLayout from '../components/slayout';
import SEO from '../components/seo';
import style from './about.module.css';

const About = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <SLayout location={location.pathname} title={siteTitle}>
      <SEO title='About' />
      <p className={style.summary}>
        <Img fluid={data.file.childImageSharp.fluid} />
        Hello! I'm Chris, a software development engineer @ Amazon,
        recent Georgia Tech graduate, former intern at NASA Jet 
        Propulstion Laboratory

        Get in Touch

        check out this
        {/*<Img fluid={data.file.childImageSharp.fluid} />*/}
      </p>
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
