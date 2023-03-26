import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const SearchLink = styled(Link)``;
