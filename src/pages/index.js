import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { Divider, Typography } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

const { Text } = Typography;

class BlogIndex extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <Link>About</Link><br/>
        <Link>Projects</Link><br/>
        <Link to='/travel'>Travel</Link><br/>
        <Link></Link>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug

          return (
            <div key={node.fields.slug}>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
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

export default BlogIndex;

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
