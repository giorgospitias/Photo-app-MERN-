import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  text-align: center;
  background: ${(props) => props.theme.main};
`;

export const NavWrapper = styled.nav`
  display: flex;
  margin-top: 15px;
  margin-bottom: 10px;
  width: 60%;
  align-self: center;
  justify-content: center;

  @media (max-width: 630px) {
    width: 95%;
  }
`;

export const LogoIcon = styled.img`
  margin-top: 5px;
  height: 50px;
  width: 50px;
  border-radius: 5px;
`;

export const NavLinksList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-self: center;
  gap: 30px;
  width: 100%;
  margin-right: 2px;
`;

export const NavElement = styled.li`
  list-style: none;
`;

export const LinkIcon = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 5px;
`;

export const LinkText = styled.p`
  color: ${(props) => props.theme.textColor};
`;

export const ThemeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 50px;
  width: 50px;
`;

export const ThemeLinkIcon = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  height: 50px;
  width: 50px;

  &.active {
    background-color: #a2c8fa;
  }
`;

export const MobileMenu = styled.div`
  margin-top: 13px;
  margin-left: 30px;
  ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 13%;
    right: 17%;
    z-index: 1;
    padding: 5px 0;
    background: ${(props) => props.theme.main};
    text-decoration: none;

    a,
    li {
      color: ${(props) => props.theme.textColor};
      cursor: pointer;
      text-decoration: none;
      padding: 7px 15px;

      &:hover {
        background: #6958f2;
      }
    }
  }
  .hamburger-icon {
    font-size: 2rem;
    transition: 0.3s color ease;

    &:hover {
      color: #6958f2;
    }

    ul {
      top: 150%;
      left: -310%;
    }
  }
`;
