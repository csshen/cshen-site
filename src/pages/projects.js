import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { Typography, Divider, Icon, Avatar,
         Tooltip} from 'antd';

const { Title, Paragraph, Text } = Typography;


class Projects extends Component {
  render() {
    const { location, data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;


    return (
      <Layout location={location} title={siteTitle}>
        <SEO title='Projects' />
        <Title level={2} ><Icon type='project'/> Projects</Title>
        {
          posts.map(({ node}) => {
            const { title, date, description, github, demo } = node.frontmatter;

            return (
              <div>
                <Link to={'/projects'+node.fields.slug}>
                  <Title level={4} className='grey-link'>{title}</Title>
                </Link>
                <Paragraph>{description}</Paragraph>
                <small><Text type='secondary'>{date}</Text></small>
                <Divider orientation='right' style={{marginTop: 0}}>
                  <Tooltip title='Demo'>
                    <a href={demo} className='grey-link proj-icon'>
                      <Icon type='control' />
                    </a>
                  </Tooltip>
                  <Divider type='vertical' />
                  <Tooltip title='GitHub'>
                    <a href={github} className='grey-link proj-icon'>
                      <Icon type='github' />
                    </a>
                  </Tooltip>
                  <Divider type='vertical' />
                  <Tooltip title='Read More'>
                    <Link to={'/projects'+node.fields.slug} className='grey-link proj-icon'>
                      <Icon type='read' />
                    </Link>
                  </Tooltip>
                </Divider>
              </div>
            );
          })
        }


      </Layout>
    );
  }
}

export default Projects;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
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
