import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <ul className="nav nav-tabs mr-auto fixed-bottom justify-content-center">
      <li className="nav-item">
        <NavLink
          to="https://www.linkedin.com/uas/login-submit"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          LinkedIn
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="https://github.com/sarbanibhadra"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Github
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="work"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Email: sarbani.bhadra@gmail.com
        </NavLink>
      </li>
    </ul>
  );
}

export default Footer;
