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
  columns: 3;
  gap: 16px;
  align-self: center;
  width: 60%;

  img {
    width: 100%;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 16px;
    position: relative;
  }
`;
