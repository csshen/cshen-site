import React from 'react';
import { graphql } from 'gatsby';
import SLayout from '../components/slayout';
import style from '../styles/contact.module.scss';

const Contact = ({ location, data }) => {
  return (
    <SLayout location={location.pathname}>
      <div style={{marginTop: '3em', fontFamily: 'Inconsolata', fontSize: 14}}>
        <a style={{color: 'grey'}} className={style.clink} href="mailto:hello@chrisshen.co?Subject=Hello">hello@chrisshen.co</a>
        <hr />
        <a className={style.clink} href="https://www.linkedin.com/in/christopher-shen-aa780912b/">LinkedIn</a><br/>
        <a className={style.clink} href="https://www.youtube.com/user/CrateNinja/featured">YouTube</a><br/>
        <a className={style.clink} href="https://github.com/csshen">GitHub</a><br/>
      </div>
    </SLayout>
  );
};

export default Contact;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
