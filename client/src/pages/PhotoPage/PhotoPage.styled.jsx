import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  text-decoration: none;
`;

export const ImageContainer = styled.div`
  display: flex;
  background-color: "gray";
  border-radius: 5px;
`;

export const TagLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 3px;
  padding: 5px;
  margin: 5px;
`;

export const UserImage = styled.img`
  margin-right: 10px;
  border-radius: 5px;
`;

export const MainImage = styled.img`
  max-width: 40vw;
  border-radius: 5px;
`;

export const StyledDiv = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tags = styled.p`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;
