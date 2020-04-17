import React from 'react';
import { Link, graphql } from 'gatsby';
import SLayout from '../components/slayout';
import MapChart from '../components/MapChart/MapChart';
import SEO from '../components/seo';
import style from '../styles/travelogue.module.scss';
import grid from '../styles/photo-gallery.module.scss';

const Travelogue = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <SLayout location={location.pathname} title={siteTitle}>
      <SEO title='Travelogue' />
      <div className={grid.grid}>
      {
        data.countries.edges.map(edge => {
          let fm = edge.node.childMdx.frontmatter;
          let cid = fm.translations[0].toLowerCase().replace(/ /g, '-');
          return (
            <Link to={`/travelogue/${cid}`} className={style.tile}>
              <div className={style.overlay}>
                <strong>{ fm.translations.join(' · ') }</strong>
                <div>{ fm.cities.map(city => city.city).join(' · ') }</div>
                <div>{ fm.timestamp }</div>
                <div>{ fm.date }</div>
              </div>
              <MapChart country={cid} markers={fm.cities}/>
            </Link>
          );
        })
      }
      </div>
    </SLayout>
  );
}

export default Travelogue;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    countries: allFile(filter: {relativeDirectory: {regex: "/(.*)content/"}, sourceInstanceName: {eq: "travelogue"}, extension: {eq: "md"}},
    sort: {fields: childMdx___frontmatter___date, order: DESC}) {
      edges {
        node {
          childMdx {
            frontmatter {
              translations
              date(formatString: "MMM YYYY")
              cities {
                city
                lat
                long
                radius
              }
            }
          }
        }
      }
    }
  }
`;
