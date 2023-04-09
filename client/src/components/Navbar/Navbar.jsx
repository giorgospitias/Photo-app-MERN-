import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import galleryIcon from "./../../assets/cameraIcon.svg";
import aiIcon from "./../../assets/artificial-intelligence2.png";
import moonIcon from "./../../assets/dark-moon.png";
import SearchField from "../SearchField/SearchField";
import useWindowSize from "../../utils/windowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  NavWrapper,
  LogoIcon,
  NavLinksList,
  NavElement,
  LinkIcon,
  LinkText,
  ThemeLinkIcon,
  ThemeWrapper,
  NavLink,
  MobileMenu,
} from "./Navbar.styled";

function Navbar(props) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const size = useWindowSize();

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleLinkClick = () => {
    setMobileMenu(false);
  };

  return (
    <Container>
      <NavWrapper>
        <LogoIcon src={logo} alt="logo" />
        <SearchField />
        {size.width > 1000 && (
          <NavLinksList>
            <NavElement>
              <NavLink to="/">
                <LinkIcon src={galleryIcon} alt="main-photos" />
              </NavLink>
              <LinkText>Photos</LinkText>
            </NavElement>
            <NavElement>
              <NavLink to="/ai">
                <LinkIcon src={aiIcon} alt="ai-photos" />
              </NavLink>
              <LinkText>Ai</LinkText>
            </NavElement>
            <NavElement>
              <ThemeWrapper>
                <ThemeLinkIcon
                  src={moonIcon}
                  alt="theme-icon"
                  onClick={props.toggleTheme}
                />
              </ThemeWrapper>
              <LinkText>Theme</LinkText>
            </NavElement>
          </NavLinksList>
        )}
        {size.width <= 1000 && (
          <MobileMenu>
            <div>
              <FontAwesomeIcon
                onClick={handleMobileMenu}
                icon={faBars}
                className="hamburger-icon"
              />
            </div>

            {mobileMenu && (
              <ul>
                <Link to="/" onClick={handleLinkClick}>
                  Photos
                </Link>
                <Link to="/Ai" onClick={handleLinkClick}>
                  Ai Gallery
                </Link>
              </ul>
            )}
          </MobileMenu>
        )}
      </NavWrapper>
    </Container>
  );
}

export default Navbar;
