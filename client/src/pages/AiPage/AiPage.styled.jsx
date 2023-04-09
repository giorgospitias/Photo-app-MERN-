import styled from "styled-components";
import { Link } from "react-router-dom";

export const AiSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  background: ${(props) => props.theme.main};
  margin-top: 1rem;
`;

export const CreateLink = styled(Link)``;

export const CreateButton = styled.button`
  font-family: inter;
  font-weight: 500;
  background-color: #6469ff;
  border-radius: 6px;
  border-color: transparent;
  color: white;
  padding: 0.5rem 1rem;
  margin-top: 10px;
  cursor: pointer;
`;

export const MainContainer = styled.div`
  align-self: center;
  width: 60%;
  text-align: left;

  @media (max-width: 630px) {
    width: 95%;
  }
`;

export const Header = styled.h1`
  font-weiht: 800;
  font-size: 32px;
  color: ${(props) => props.theme.textColor};
  @media (max-width: 717px) {
    font-size: 28px;
  }
`;

export const Paragraph = styled.p`
  margin-top: 0.5rem;
  color: #666e75;
  font-size: 16px;
`;

export const FormFieldContainer = styled.div`
  margin-top: 20px;
  align-self: center;
`;

export const Container = styled.div`
  margin-top: 2.5rem;
  align-self: center;
`;

export const InnerContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items-center;
`;

export const SearchHeader = styled.h2`
  font-weight: 500;
  color: #666e75;
  margin-bottom: 0.8rem;
`;

export const PhotoHeader = styled.h2`
  font-weight: 700;
  color: #6449ff;
  margin-top: 1.25rem;
  text-transform: uppercase;
`;

export const ResultsContainer = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
