import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';

const NotFoundPage = ({ data }) => {
  return (
    <div>
      <SEO title="404: Not Found" />
      <Link to="/">Go Home</Link>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  );
}

export default NotFoundPage;
