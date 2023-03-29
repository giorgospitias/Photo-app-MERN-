import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  text-align: center;
  background: ${(props) => props.theme.main};
`;

export const ImagesContainer = styled.div`
  align-self: center;
  width: 60%;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;
