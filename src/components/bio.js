import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Tooltip } from 'antd';

import { rhythm } from '../utils/typography';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  // LIST URLS IN BIO
  const jpl = 'https://www.jpl.nasa.gov/';
  const gatech = 'https://www.gatech.edu/';
  const smap = 'https://smap.jpl.nasa.gov/';

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2),
      }}
    >
      <Tooltip title='About'>
        <Link to='/about'>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </Link>
      </Tooltip>
      <p>
        Hi, I'm <strong>{ author }</strong>! I'm a fourth year undergraduate
        at <a href={gatech} className='black-link'>Georgia Tech</a>.
        This past summer I was a software engineering intern
        at the <a href={jpl} className='black-link'>NASA Jet Propulsion Laboratory</a> working
        on <a href={smap} className='black-link'>SMAP</a>. Check out the
        links below to see what I have been up to.
      </p>
    </div>
  )
}

export default Bio;
