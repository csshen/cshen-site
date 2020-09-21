import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
//import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { motion, useViewportScroll } from 'framer-motion';
import SEO from '../components/seo';
import Layout from '../components/layout';

import style from '../styles/blog-post.module.scss';
import layout from '../styles/layout.module.scss';

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.mdx;
  const tags = post.frontmatter.tags || [];
  const { title, description, featured } = post.frontmatter;
  let fluid = featured ? featured.childImageSharp.fluid : data.default.childImageSharp.fluid;
  let { slug, previous, next } = pageContext;
  previous= previous && (
    <Link to={'/posts'+previous.fields.slug} rel='prev'
          className={style.navlink}>
          ← {previous.frontmatter.title}</Link>);
  next = next && (
    <Link to={'/posts'+next.fields.slug} rel='next'
          className={style.navlink}>
          {next.frontmatter.title} →</Link>);

  const { scrollYProgress } = useViewportScroll();

  return (
    <Layout location={'/posts'+slug} padding='0em'>
      <SEO title={title} description={description || post.excerpt} />
      <div className={style.mdx}>
        <Img fluid={{ ...fluid, aspectRatio: 1.2}}
             placeholderStyle={{filter: 'blur(8px)'}}
             className={layout.desktopHidden}
        />
        <div className={style.heading}>
          <div id={style.title}>{post.frontmatter.title}</div>
          <div id={style.subtitle}>{post.frontmatter.description}</div>
          <div id={style.divider}>· · ·</div>
          <div id={style.date}>{post.frontmatter.date}</div>
        </div>
        <hr />

        <MDXRenderer>{post.body}</MDXRenderer>
        <div style={{textAlign: 'right'}}>
          { tags.map(item =><Link to={`/tags/${item}`} className={style.tag}>{ item }</Link>) }
        </div>
        <hr />
        <div>
          <span style={{float: 'left'}}>{ previous }</span>
          <span style={{float: 'right'}}>{ next }</span>
        </div>
      </div>
      <div className={style.footer}>
        <div style={{padding: '8px 15px'}}>
          <Link to='/archive'>Archive</Link>
          <Link to='/' style={{float: 'right'}}>Home</Link>
        </div>
        <svg viewBox="0 0 100 1" style={{display: 'block'}}>
          <motion.path
            d="M0 0 H100"
            style={{ pathLength: scrollYProgress }}
            strokeWidth="2"
            stroke="#CDEDFD"
          />
        </svg>
      </div>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        featured {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
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
