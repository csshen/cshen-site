import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Profile from '../components/profile';

import { Divider, Typography, Icon } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

const { Text } = Typography;

class Posts extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='Posts' />
        <Text>All posts</Text>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug

          return (
            <div key={node.fields.slug}>
              <Link style={{ boxShadow: `none` }} to={'/posts'+node.fields.slug}>
                <div className='snippet'>
                  <Divider orientation='left'>{title}</Divider>
                  <small><Text type="secondary">{node.frontmatter.date}</Text></small>
                  <br />
                  <Text>{ node.frontmatter.description || node.excerpt }</Text>
                  {/* display tags here eventually */}
                </div>
              </Link>
            </div>
          );
        })}
      </Layout>
    )
  }
}

export default Posts;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
