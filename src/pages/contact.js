import React from 'react';
import { graphql } from 'gatsby';
import SLayout from '../components/slayout';

const Contact = ({ location, data }) => {
  return (
    <SLayout location={location.pathname}>
      <div style={{marginTop: '3em', fontFamily: 'Inconsolata'}}>
      <strong>Email</strong> hello@chrisshen.co <a href="mailto:hello@chrisshen.co?Subject=Hello">↩</a><br/>
      <strong>LinkedIn</strong> <a href="https://www.linkedin.com/in/christopher-shen-aa780912b/">↩</a><br/>
      <strong>YouTube</strong> <a href="https://www.youtube.com/user/CrateNinja/featured">↩</a><br/>
      <strong>GitHub</strong> <a href="https://github.com/csshen">↩</a><br/>
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
