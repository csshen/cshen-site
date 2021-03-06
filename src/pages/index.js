import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import Layout from '../components/layout';

import '../styles/style.css';
import style from '../styles/photo-gallery.module.scss';
import ps from '../styles/projects.module.scss';


const BlogIndex = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.mdx.edges;
  return (
    <Layout location={location.pathname} title={siteTitle}>
      <SEO />
      <div className={style.grid}>
        {
          posts.map(({node}) => {
            const { title, date, description, featured, textcolor } = node.frontmatter;
            let fluid = featured ? featured.childImageSharp.fluid : data.default.childImageSharp.fluid;
            return (
              <Link to={'/posts'+node.fields.slug} className={ps.tile}>
                <div className={ps.overlay} style={{color: textcolor || 'black'}}>
                  <strong>{title}</strong><br/>
                  {description}<br/>
                  {date}
                </div>
                <Img fluid={{ ...fluid, aspectRatio: 1}}
                     className={ps.image}
                     placeholderStyle={{filter: 'blur(8px)'}}/>
              </Link>
            );
          })
        }
      </div>
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    mdx: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/blog(.*)/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            description
            textcolor
            featured {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    default: file(sourceInstanceName: {eq: "assets"}, relativePath: {eq: "default.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
