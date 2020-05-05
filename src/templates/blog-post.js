import React from 'react';
import { Link, graphql } from 'gatsby';
//import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SLayout from '../components/slayout';
import SEO from '../components/seo';
import style from '../styles/blog-post.module.scss';

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.mdx;
  const tags = post.frontmatter.tags || [];
  const { title, description } = post.frontmatter;
  let { slug, previous, next } = pageContext;
  previous= previous && (
    <Link to={'/posts'+previous.fields.slug} rel='prev'
          className={style.navlink}>
          ← {previous.frontmatter.title}</Link>);
  next = next && (
    <Link to={'/posts'+next.fields.slug} rel='next'
          className={style.navlink}>
          {next.frontmatter.title} →</Link>);

  return (
    <SLayout location={'/posts'+slug} padding='0em'>
      <SEO title={title} description={description || post.excerpt} />
      <div className={style.mdx}>
        <div className={style.heading}>
          <div id={style.title}>{post.frontmatter.title}</div>
          <div id={style.subtitle}>{post.frontmatter.description}</div>
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
    </SLayout >
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
      }
    }
  }
`;
