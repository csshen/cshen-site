import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';

const NotFoundPage = ({ data }) => {
  // Source https://www.kapwing.com/404-illustrations
  return (
    <div style={{margin: '8em auto', maxWidth: 800, display: 'flex'}}>
      <SEO title="404: Not Found" />
      <div style={{flex: 1}}>
        <h1>404 Not Found</h1>
        <p>This page is in the garbage.</p>
        <Link to="/" style={{
          background: '#98c1d9',
          padding: '.6em .9em',
          borderRadius: 5
        }}>Go back to Homepage</Link>
      </div>
      <div style={{flex: 1}}>
        <Img fluid={data.file.childImageSharp.fluid}/>
      </div>
    </div>
  );
}

export default NotFoundPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "404.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
