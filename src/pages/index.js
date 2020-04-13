import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostCard from '../components/PostCard';
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
import '../styles/style.css';
import { rhythm, scale } from '../utils/typography';
import style from './index.module.css';

class BlogIndex extends Component {
  render() {
    const { data, location } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;
    const recent = posts.slice(0, 3);
    return (
      <div style={{
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        maxWidth: '1100px',
        margin: 'auto'
      }}>
      <h1 style={{
        fontFamily: 'Crimson Text',
        fontSize: 28
      }}>CHRIS SHEN</h1>
      <Row gutter={24}>
        <SEO title='Home' />
        <Col lg={6}>
          <div className='top' >
          Last Updated: Jan 23, 2020<br/>
          </div>

          <Link to='/about'><h5>About</h5></Link>
          <div id={style.summary}>
            Hello! I'm Chris, a recent Georgia Tech graduate
            and incoming Software Development Engineer at
            Amazon.  Check out some of my{' '}
            <Link to='/tags/data-visualization' className='link'>data visualization</Link>,{' '}
            <Link to='/tags/machine-learning' className='link'>machine learning</Link>, and{' '}
            <Link to='/tags/linguistics' className='link'>linguistics</Link> projects.
          </div>



          <Link to='/projects'><h5>Projects</h5></Link>
          <Link to='/travelogue'><h5>Travelogue</h5></Link>
          <ul style={{
            fontFamily: 'Inconsolata',

          }}>
            <li><Link to='/travelogue/japan' className='lz'>Japan · 日本</Link></li>
            <li><Link to='/travelogue/taiwan' className='lz'>Taiwan · 臺灣</Link></li>
            <li><Link to='/travelogue/korea' className='lz'>Korea · 한국</Link></li>
          </ul>
          <Link to='/archive'><h5>Archive</h5></Link>



        </Col>
        <Col lg={18}>

          <Link to='/recent'><h5>Recent</h5></Link>
          {
            recent.map(({node}) => {
              const { title, date, description, github, demo } = node.frontmatter;
              return (<>
                <PostCard
                  title={title}
                  description={description}
                  excerpt={node.excerpt}
                  image={'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
                  date={date}
                  slug={'/posts/'+node.fields.slug}
                /><br/>
                </>);
            })
          }
        </Col>

      </Row>
      </div>
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
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 425)
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
