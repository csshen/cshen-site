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
  previous = previous && (
    <Link to={'/posts'+previous.fields.slug} rel='prev'>
      {'← '+previous.frontmatter.title}
    </Link>
  );
  next = next && (
    <Link to={'/posts'+next.fields.slug} rel='next'>
      {next.frontmatter.title+' →'}
    </Link>
  );

  return (
    <SLayout location={'/posts'+slug} padding='0em'>
    <div id={style.wrapper}>
      <SEO title={title} description={description || post.excerpt} />
      <div className={style.float}>
        <div id={style.title}>{post.frontmatter.title}</div>
        <div id={style.subtitle}>{post.frontmatter.description}</div>
        <div id={style.date}>{post.frontmatter.date}</div>
      </div>
      <div className={style.mdx}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
      <div className={style.float}>
        { tags.map(item =><Link to={`/tags/${item}`} className={style.tag}>{ item }</Link>) }
        <br /><br />
        <div id={style.nav}>
          <span style={{float: 'left'}}>{ previous }</span>
          <span style={{float: 'right'}}>{ next }</span>
        </div>
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
