import React from 'react';
import { Link, graphql } from 'gatsby';
import SLayout from '../components/slayout';
import PostCard from '../components/PostCard';

const Tags = ({ data, pageContext, siteTitle, location }) => {

  const recent = data.allMdx.edges;
  const tag = pageContext.tag.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

  return (
    <SLayout location={location.pathname} title={siteTitle}>
      <h2>
      <Link to='/archive'>
      <span style={{ color: '#989EA3'}}>POSTS · </span>
      </Link>
      <span style={{ color: '#4C6085'}}>{tag}</span>
      </h2>

      {
        recent.map(({node}) => {
          const { title, date, description, github, demo } = node.frontmatter;

          return (<>
            <PostCard
              title={title}
              description={description}
              image={'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
              date={date}
              slug={'/posts'+node.fields.slug}
              github={github}
              demo={demo}
            /><br/>

            </>);
        })
      }


    </SLayout>
  );
}

export default Tags;

export const pageQuery = graphql`
  query Tags($tag: String) {
    allMdx(filter: {frontmatter: {tags: {in: [$tag]}}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;
