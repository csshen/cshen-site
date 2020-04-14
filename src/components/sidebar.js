import React from 'react';
import { Link } from 'gatsby';
import style from '../styles/sidebar.module.scss';

// normal navigation link
const NavLink = ({ children, to, location }) => {
  return <Link to={to} activeClassName={style.highlight}>{ children }</Link>;
}
// header link
const HLink = ({ children, to }) => {
  return <Link to={to} className={style.highlightA} activeClassName={style.highlightB}><strong>{ children }</strong></Link>;
}

const Sidebar = ({ location }) => {
  return (
    <div className={style.sidebar}>
      <h3 id={style.name}>CHRIS SHEN</h3>
      <ul>
        <li><Link to='/index2' activeClassName={style.highlight}>Recent</Link></li>
        <hr />
        <li><HLink to='/projects'>Projects</HLink></li>
        <li><Link to='/posts/website-v2' activeClassName={style.highlight}>Website 2.0</Link></li>
        <li><Link to='/posts/arcadia' activeClassName={style.highlight}>Arcadia</Link></li>
        <hr />
        <li><HLink to='/travelogue'>Travelogue</HLink></li>
        <li><Link to='/travelogue/japan' activeClassName={style.highlight}>Japan</Link></li>
        <li><Link to='/travelogue/taiwan' activeClassName={style.highlight}>Taiwan</Link></li>
        <li><Link to='/travelogue/korea' activeClassName={style.highlight}>Korea</Link></li>
        <li><Link to='/travelogue/hong-kong' activeClassName={style.highlight}>Hong Kong</Link></li>
        <li><Link to='/travelogue/singapore' activeClassName={style.highlight}>Singapore</Link></li>
        <hr />
        <li><HLink to='/tags/linguistics'>Linguistics</HLink></li>
        <li><Link to='/posts/linguistic-phylogenies' activeClassName={style.highlight}>Linguistic Phylogenies</Link></li>
        <hr />
        <li><HLink to='/tags/design'>Design</HLink></li>
        <li><Link to='/posts/vaporwave' activeClassName={style.highlight}>Vaporwave</Link></li>
        <hr />
        <li><HLink to='/archive'>Archive</HLink></li>
        <hr />
        <li><Link to='/about' activeClassName={style.highlight}>About</Link></li>
        <li><Link>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
