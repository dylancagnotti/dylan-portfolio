import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../utils/styles/flex.scss';
import NavStyle from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Navbar = () => {
  return (
    <nav className={NavStyle.nav}>
      <div className={NavStyle.navLogoContainer}>Logo</div>
      <div className={NavStyle.navLinksContainer}>
        <ul className={NavStyle.navList}>
          <li className={NavStyle.navListElement}>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? NavStyle.navlink + ' ' + NavStyle.navlinkActive
                  : NavStyle.navlink;
              }}
              data-interactable
              data-text-popup="Go home!"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={NavStyle.navListElement}>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? NavStyle.navlink + ' ' + NavStyle.navlinkActive
                  : NavStyle.navlink;
              }}
              data-interactable
              data-text-popup="Want my number?"
              to="/contacts"
            >
              Contacts
            </NavLink>
          </li>
        </ul>
        <div className={'flex h-right v-center'}>
          <FontAwesomeIcon icon={faLinkedin} size={'xl'} color={'white'} />
        </div>
      </div>
    </nav>
  );
};
