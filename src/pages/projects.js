import React from 'react';
import { Link, graphql } from 'gatsby';
import { Divider } from 'antd';
import SLayout from '../components/slayout';
import SEO from '../components/seo';
import PostCard from '../components/postcard';

const Projects = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  return (
    <SLayout location={location.pathname} title={siteTitle}>
      <SEO title='Projects' />
      {
        posts.map(({node}) => {
          const { title, date, description, github, demo } = node.frontmatter;

          return (<>
            <PostCard
              title={title}
              description={description}
              image={'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
              date={date}
              slug={'/posts/'+node.fields.slug}
            /><br/>

            </>);
          })
        }
    </SLayout>
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
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: "project" } } }
    ) {
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
            github
            demo
          }
        }
      }
    }
  }
`;
