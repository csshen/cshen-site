import React from 'react';
import { Link, graphql } from 'gatsby';
import SLayout from '../components/slayout';
import SEO from '../components/seo';
import style from '../styles/archive.module.scss';

const Archive = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.posts.edges;
  // const tags = data.tags.group;

  return (
    <SLayout location={location.pathname} title={siteTitle}>
      <SEO title='Archive' />
      <div style={{paddingTop: '3.75em'}}>
        <strong className={style.title}>All Posts</strong>
        {
          posts.map(({node}) => {
            const title = node.frontmatter.title || node.fields.slug;
            let url = '/posts'+node.fields.slug;
            return (<div>
              <Link to={url} className={style.file}>
                {node.frontmatter.date} · {title}
              </Link>
              </div>);
          })
        }
      </div>
    </SLayout>
  );
}

export default Archive;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMdx(sort: { fields: [frontmatter___date], order: DESC }, filter: {fileAbsolutePath: {regex: "/(.*)blog(.*)/"}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    tags: allMdx {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;
