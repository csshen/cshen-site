import React from 'react';
import { Link } from 'gatsby';
import style from '../styles/sidebar.module.scss';

// normal navigation link
const NavLink = ({ children, to, location }) => {
  return <Link to={to} activeClassName={style.highlight}>{ children }</Link>;
}
// header link
const HLink = ({ children, to, location }) => {
  return <Link to={to} className={style.highlightA} activeClassName={style.highlightB}><strong>{ children }</strong></Link>;
}

const Sidebar = ({ location }) => {
  return (
    <div className={style.sidebar}>
      <h3 id={style.name}>CHRIS SHEN</h3>
      <ul>
        <li><NavLink to='/index2' location={location}>Recent</NavLink></li>
        <hr />
        <li><HLink to='/projects' location={location}>Projects</HLink></li>
        <li><NavLink to='/travelogue/japan' location={location}>Arcadia</NavLink></li>
        <li><NavLink to='/travelogue/japan' location={location}>Deep Lofi</NavLink></li>
        <hr />
        <li><HLink to='/travelogue' location={location}>Travelogue</HLink></li>
        <li><NavLink to='/travelogue/japan' location={location}>Japan</NavLink></li>
        <li><NavLink to='/travelogue/taiwan' location={location}>Taiwan</NavLink></li>
        <li><NavLink to='/travelogue/korea' location={location}>Korea</NavLink></li>
        <li><NavLink to='/travelogue/switzerland' location={location}>Switzerland</NavLink></li>
        <li><NavLink to='/travelogue/singapore' location={location}>Singapore</NavLink></li>
        <hr />
        <li><HLink to='/tags/linguistics' location={location}>Linguistics</HLink></li>
        <li><NavLink to='/posts/linguistic-phylogenies/' location={location}>Linguistic Phylogenies</NavLink></li>
        <li><Link>N Gram Classification</Link></li>
        <li><Link>WSB Chatbot</Link></li>
        <li><Link>Aizuchi</Link></li>
        <hr />
        <li><b>&nbsp;Design</b></li>
        <li><Link>Some design project</Link></li>
        <li><Link>Typography</Link></li>
        <li><Link>Vaporwave CSS</Link></li>
        <hr />
        <li><HLink to='/archive' location={location}>Archive</HLink></li>
        <hr />
        <li><Link to='/about' activeClassName={style.highlight}>About</Link></li>
        <li><Link>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
