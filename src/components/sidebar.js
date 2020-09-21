import React, { useState, useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Octicon, { repoForked, star } from 'octicons-react';
import moment from 'moment';

import style from '../styles/sidebar.module.scss';
import layout from '../styles/layout.module.scss';

const NLink = ({ children, to }) => {
  return <Link to={to} className={style.nlink}
    activeClassName={style.nlinkActive}>{ children }</Link>;
}
const HLink = ({ children, to }) => {
  return <Link to={to} className={style.hlink}
    activeClassName={style.hlinkActive}>{ children }</Link>;
}

const Sidebar = ({ location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          buildTime
        }
      }
    `);
  const buildTime = moment(site.buildTime).local().format(`MMM DD, YYYY`);

  const [stars, setStars] = useState(0);
  const [forks, setForks] = useState(0);
  useEffect(() => {
    fetch('https://api.github.com/repos/csshen/cshen-site')
      .then(response => response.json())
      .then(data => {
        setStars(data.stargazers_count);
        setForks(data.forks_count);
      });
  });

  let sidebar = style.sidebar;
  if (location.includes('/posts')) {
    sidebar += ` ${layout.mobileHidden}`;
  }

  return (
    <div className={sidebar}>
      <h3 id={style.name}><Link to='/'>CHRIS SHEN</Link></h3>
      <ul style={{lineHeight: 1.4, color: 'inherit'}}>
        <li><HLink to='/'><strong>Recent</strong></HLink></li>
        <li><NLink to='/posts/linguistic-phylogenies'>Linguistic Phylogenies</NLink></li>
        <li><NLink to='/posts/arcadia'>Arcadia</NLink></li>
        <li><NLink to='/posts/vaporwave'>Vaporwave</NLink></li>
        <hr />
        <li><HLink to='/travelogue'><strong>Travelogue</strong></HLink></li>
        <li><NLink to='/travelogue/korea'>Korea</NLink></li>
        <li><NLink to='/travelogue/taiwan'>Taiwan</NLink></li>
        <li><NLink to='/travelogue/japan'>Japan</NLink></li>
        <li><NLink to='/travelogue/hong-kong'>Hong Kong</NLink></li>
        <hr />
        <li><HLink to='/archive'>Archive</HLink></li>
        <li><HLink to='/contact'>Contact</HLink></li>
        <hr />
        <li>&nbsp;Updated on { buildTime }</li>
        <li><a href='https://github.com/csshen/cshen-site#readme'
               target='_blank' rel='noopener noreferrer'
               className={style.elink}>
          GitHub <Octicon icon={star}/> { stars } <Octicon icon={repoForked}/> { forks }
        </a></li>
        <li style={{color: 'grey'}}>&nbsp;hello@chrisshen.co</li>
      </ul>
    </div>
  );
}

export default Sidebar;
