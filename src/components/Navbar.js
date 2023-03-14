import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import logo from '../img/logo.png';

const links = [
  {
    to: '/',
    text: 'Rockets',
  },
  {
    to: '/missions',
    text: 'Missions',
  },
  {
    to: '/my-profile',
    text: 'My Profile',
  },
];

const Navbar = () => (

  <header className="header">
    <NavLink to="/" className="logos">
      <img src={logo} alt="planet" className="icon" />
      <span className="logo-text">Space Travelers&apos; Hub</span>
    </NavLink>

    <nav>
      <ul className="nav-list">
        {links.map((e) => (
          <NavLink
            key={e.to}
            to={e.to}
            className={({ isActive }) => cn('nav-link', { active: isActive })}
          >
            {e.text}
          </NavLink>

        ))}
      </ul>
    </nav>
  </header>
);

export default Navbar;
