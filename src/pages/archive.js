import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import SLayout from '../components/slayout';
import SEO from '../components/seo';
import { Divider } from 'antd';
import style from '../styles/archive.module.css';

const Archive = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.posts.edges;
  const tags = data.tags.group;

  return (
    <SLayout location={location.pathname} title={siteTitle}>
      <SEO title='Archive' />
      <div style={{paddingTop: '3em'}}>
        {
          posts.map(({node}) => {
            const title = node.frontmatter.title || node.fields.slug;
            let url = '/posts'+node.fields.slug;
            return (<>
              <Link to={url} className={`${style.file} l2`}>
                {node.frontmatter.date} · {title}
              </Link>
              <br /></>);
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