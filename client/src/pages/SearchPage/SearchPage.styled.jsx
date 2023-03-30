import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  width: 952px;

  @media (max-width: 780px) {
    width: 80vw;
    justify-content: center;
  }
`;

export const ResultsTextWrapper = styled.div`
  text-align: center;
  font-size: 24px;
`;

export const SearchValueSpan = styled.span`
  font-weight: bold;
  font-style: italic;
`;

export const ResultsContainer = styled.div`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const StyledImage = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 290px;
  object-fit: cover;
`;

export const StyledDiv = styled.div`
  height: 290px;
  width: 290px;
  margin: 10px 10px;
  border-radius: 10px;
  background-color: "gray";
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
