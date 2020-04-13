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
          let cid = fm.translations[0].toLowerCase() // country ID change this to
          // add dashes in multi word country
          return (
            <Link to={`/travelogue/${cid}`} className={style.item}>
              <div className={style.out}>
                <div className={style.overlay}>
                  <div className={style.country}>{ fm.translations.join(' · ') }</div>
                  <div>{ fm.cities.map(city => city.city).join(' · ') }</div>
                  <div>{ fm.timestamp }</div>
                </div>
                <div className={style.in}>
                  <MapChart country={cid} markers={fm.cities}/>
                </div>
              </div>
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
    countries: allFile(filter: {relativeDirectory: {regex: "/(.*)content/"}, sourceInstanceName: {eq: "travelogue"}, extension: {eq: "md"}}) {
      edges {
        node {
          childMdx {
            frontmatter {
              translations
              timestamp
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
