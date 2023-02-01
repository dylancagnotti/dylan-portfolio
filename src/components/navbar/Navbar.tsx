import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { slide as Menu } from 'react-burger-menu';

import '../../utils/styles/flex.scss';
import NavStyle from './Navbar.module.scss';
import './Menu.scss';
import Logo from '../../assets/images/logo.svg';

export const Navbar = () => {
  const [isHambugerMenuOpen, setIsHambugerMenuOpen] = React.useState(false);

  const handleIsOpen = () => {
    setIsHambugerMenuOpen(!isHambugerMenuOpen);
  };

  const closeSideBar = () => {
    setIsHambugerMenuOpen(false);
  };
  return (
    <nav className={NavStyle.nav}>
      <div className={NavStyle.navLogoContainer}>
        <img data-interactable data-text-popup="Great logo huh?" src={Logo} />
      </div>
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
        <Menu
          right
          isOpen={isHambugerMenuOpen}
          onOpen={handleIsOpen}
          onClose={handleIsOpen}
        >
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
                onClick={closeSideBar}
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
                onClick={closeSideBar}
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
