import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import galleryIcon from "./../../assets/cameraIcon.svg";
import aiIcon from "./../../assets/artificial-intelligence2.png";
import moonIcon from "./../../assets/dark-moon.png";
import SearchField from "../SearchField/SearchField";

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
} from "./Navbar.styled";

function Navbar(props) {
  return (
    <Container>
      <NavWrapper>
        <LogoIcon src={logo} alt="logo" />
        <SearchField />
        <NavLinksList>
          <NavElement>
            <NavLink to="/">
              <LinkIcon src={galleryIcon} alt="main-photos" />
            </NavLink>
            <LinkText>Photos</LinkText>
          </NavElement>
          <NavElement>
            <NavLink to="/Ai">
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
      </NavWrapper>
    </Container>
  );
}

export default Navbar;
