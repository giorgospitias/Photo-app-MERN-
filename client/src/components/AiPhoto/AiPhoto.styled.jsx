import styled from "styled-components";

export const AiPhotosContainer = styled.div`
  border-radius: 0.75rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  position: relative;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
  }
`;

export const AiImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.75rem;
`;

export const PhotoDescription = styled.p`
  color: #fff;
  font-size: 0.875rem;
  font-family: system-ui, sans-serif;
  overflow-y: auto;
`;

export const StyledDiv = styled.div`
  margin-top: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

export const SubDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const NameDiv = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  object-fit: cover;
  background-color: #34d399;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 0.75rem;
  font-weight: bold;
`;

export const StyledButton = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
`;

export const DownloadImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
`;
