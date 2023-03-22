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
`;

export const LogoIcon = styled.img`
  margin-top: 5px;
  height: 40px;
  width: 40px;
  border-radius: 5px;
`;

export const SearchBar = styled.form`
  border-radius: 60px;
  width: 100%;
  background: rgb(239, 234, 234);
  height: 35px;
  display: flex;
  align-self: center;
  margin-left: 30px;
`;

export const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
  margin: 13px 10px 13px 15px;
`;

export const InputField = styled.input`
  background: transparent;
  flex: 1;
  border: 0;
  outline: none;
  font-size: medium;
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
