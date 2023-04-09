import styled from "styled-components";

export const StyledSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 18px;
`;

export const StyledIcon = styled.span`
  font-size: 30px;
  color: ${(props) => props.color};
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 10px;
`;

export const Paragraph = styled.button`
  margin-bottom: 10px;
  border: none;
  background-color: transparent;
  font-size: 15px;
`;
