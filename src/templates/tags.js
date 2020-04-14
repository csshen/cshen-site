import React from 'react';
import { Link, graphql } from 'gatsby';
import SLayout from '../components/slayout';
import SEO from '../components/seo';
import style from '../styles/archive.module.scss';

const Tags = ({ data, pageContext, siteTitle, location }) => {
  const recent = data.allMdx.edges;
  const tag = pageContext.tag.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

  return (
    <SLayout location={location.pathname} title={siteTitle}>
      <SEO title={tag} />
      <div style={{paddingTop: '3em'}}>
        <div className={style.title}>Posts / <strong>{tag}</strong></div>
        {
          recent.map(({node}) => {
            const title = node.frontmatter.title || node.fields.slug;
            let url = '/posts'+node.fields.slug;
            return (<div>
              <Link to={url} className={style.file}>
                { node.frontmatter.date } · { title }
              </Link>
              </div>);
          })
        }
      </div>
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
            date(formatString: "MMM DD, YYYY")
          }
        }
      }
    }
  }
`;
