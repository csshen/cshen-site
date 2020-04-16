import React from 'react';
import { Link } from 'gatsby';
import style from '../styles/sidebar.module.scss';

// header link
const HLink = ({ children, to }) => {
  return <Link to={to} className={style.highlightA} activeClassName={style.highlightB}><strong>{ children }</strong></Link>;
}

const Sidebar = ({ location }) => {
  return (
    <div className={style.sidebar}>
      <h3 id={style.name}>CHRIS SHEN</h3>
      <ul style={{lineHeight: 1.4}}>
        <li><Link to='/' activeClassName={style.highlight}>Recent</Link></li>
        <hr />
        <li><strong style={{pointerEvents: 'none'}}>&nbsp;Pinned&nbsp;</strong></li>
        <li><Link to='/posts/welcome' activeClassName={style.highlight}>Welcome</Link></li>
        <hr />
        <li><HLink to='/projects'>Projects</HLink></li>
        <li><Link to='/posts/arcadia' activeClassName={style.highlight}>Arcadia</Link></li>
        <hr />
        <li><HLink to='/travelogue'>Travelogue</HLink></li>
        <li><Link to='/travelogue/japan' activeClassName={style.highlight}>Japan</Link></li>
        <li><Link to='/travelogue/taiwan' activeClassName={style.highlight}>Taiwan</Link></li>
        <li><Link to='/travelogue/korea' activeClassName={style.highlight}>Korea</Link></li>
        <li><Link to='/travelogue/hong-kong' activeClassName={style.highlight}>Hong Kong</Link></li>
        <hr />
        <li><HLink to='/tags/linguistics'>Linguistics</HLink></li>
        <li><Link to='/posts/linguistic-phylogenies' activeClassName={style.highlight}>Linguistic Phylogenies</Link></li>
        <hr />
        <li><HLink to='/tags/design'>Design</HLink></li>
        <li><Link to='/posts/vaporwave' activeClassName={style.highlight}>Vaporwave</Link></li>
        <hr />
        <li><HLink to='/archive'>Archive</HLink></li>
        <hr />
        <li><Link to='/contact' activeClassName={style.highlight}>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
