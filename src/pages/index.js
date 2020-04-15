import React from 'react';
import { Link, graphql } from 'gatsby';
import SLayout from '../components/slayout';
import style from './index.module.scss';
import '../styles/style.css';

const Index = ({ data, location }) => {
  let x = (<div className={style.test} />);

  return (
    <SLayout location={location.pathname}>
      <div className={style.grid}>
        {x}{x}{x}{x}{x}{x}
      </div>
    </SLayout>
  );
}

export default Index;
