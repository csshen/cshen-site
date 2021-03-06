import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import style from '../styles/photo-gallery.module.scss';
import ps from '../styles/projects.module.scss';

const Projects = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.mdx.edges;
  return (
    <Layout location={location.pathname} title={siteTitle}>
      <SEO title='Projects' />
      <div className={style.grid}>
        {
          posts.map(({node}) => {
            const { title, date, description, featured, textcolor } = node.frontmatter;
            let x = null;
            if (featured) {
              x = <Img fluid={{ ...featured.childImageSharp.fluid, aspectRatio: 1}}
                       className={ps.image}
                       placeholderStyle={{filter: 'blur(8px)'}}/>;
            } else {
              x = <Img fluid={{ ...data.default.childImageSharp.fluid, aspectRatio: 1}}
                       className={ps.image}
                       placeholderStyle={{filter: 'blur(8px)'}}/>;
            }
            return (
              <Link to={'/posts'+node.fields.slug} className={ps.tile}>
                <div className={ps.overlay} style={{color: textcolor || 'black'}}>
                  <strong>{title}</strong><br/>
                  {description}<br/>
                  {date}
                </div>
              { x }
              </Link>
            );
          })
        }
      </div>
    </Layout>
  );
}

export default Projects;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    mdx: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: "project" } } }
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
