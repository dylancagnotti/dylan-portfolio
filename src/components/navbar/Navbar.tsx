import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../utils/styles/flex.scss';
import NavStyle from './Navbar.module.scss';
import './Menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { slide as Menu } from 'react-burger-menu';

export const Navbar = () => {
  const [isHambugerMenuOpen, setIsHambugerMenuOpen] = React.useState(false);

  return (
    <nav className={NavStyle.nav}>
      <div className={NavStyle.navLogoContainer}>LOGO</div>
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
        <div className={NavStyle.iconsContainer}>
          <div
            className={NavStyle.iconElement}
            data-interactable
            data-text-popup="You know what this is"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/dylan-cagnotti-9a93681ab/?locale=en_US',
                '_blank'
              )
            }
          >
            <FontAwesomeIcon icon={faLinkedin} size={'2xl'} />
          </div>
          <div
            className={NavStyle.iconElement}
            data-interactable
            data-text-popup="The versioning thingy"
            onClick={() => {
              window.open('https://github.com/dylancagnotti', '_blank');
            }}
          >
            <FontAwesomeIcon icon={faGithub} size={'2xl'} />
          </div>
        </div>
      </div>
      <div className={NavStyle.menuContainer}>
        <Menu right isOpen={isHambugerMenuOpen}>
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
                onClick={() => setIsHambugerMenuOpen(false)}
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
                onClick={() => setIsHambugerMenuOpen(false)}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
          <div className={NavStyle.iconsContainer}>
            <div className={NavStyle.iconElement}>
              <FontAwesomeIcon icon={faLinkedin} size={'2xl'} />
            </div>
            <div className={NavStyle.iconElement}>
              <FontAwesomeIcon icon={faGithub} size={'2xl'} />
            </div>
          </div>
        </Menu>
      </div>
    </nav>
  );
};
