import React from 'react';
import { graphql } from 'gatsby';
import { Divider } from 'antd';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostCard from '../components/PostCard';

const Recent = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title='Projects' />
      <h2>Recent</h2>
      <Divider />
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
              gitub={github}
              demo={demo}
            /><br/>
            </>);
          })
        }
    </Layout>
  );
}

export default Recent;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { post_type: { in: "project" } } }
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
            post_type
            github
            demo
          }
        }
      }
    }
  }
`;
