import styled from "styled-components";

export const CreateSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  background: ${(props) => props.theme.main};
  margin-top: 1rem;
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
  font-weight: 800;
  font-size: 32px;
  color: ${(props) => props.theme.textColor};
`;

export const Paragraph = styled.p`
  margin-top: 0.5rem;
  color: #666e75;
  font-size: 16px;
`;

export const CreateForm = styled.form`
  margin-top: 5rem;
  max-width: 48rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledDiv = styled.div`
  position: relative;
  background-color: #f9fafb;
  border-width: 1px;
  border-color: #d2d6dc;
  color: #1f2937;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
    border-color: #3b82f6;
  }
  width: 16rem;
  padding: 0.75rem;
  height: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const StyledImage = styled.img`
  width: 75%;
  height: 75%;
  object-fit: contain;
  opacity: 0.4;
`;

export const LoaderDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
`;

export const GenarateBtnContainer = styled.div`
  margin-top: 1.25rem;
  display: flex;
  gap: 1.25rem;
`;

export const GenerateButton = styled.button`
  color: white;
  background-color: #34d399;
  font-weight: 500;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  width: 100%;
  padding: 0.625rem 1.25rem;
  text-align: center;
  cursor: pointer;
  border-color: transparent;

  @media (min-width: 640px) {
    width: auto;
  }
`;

export const ShareBtnContainer = styled.div`
  margin-top: 2.5rem;
`;

export const ShareParagraph = styled.p`
  margin-top: 0.5rem;
  color: #666e75;
  font-size: 14px;
`;

export const ShareButton = styled.button`
  margin-top: 0.75rem;
  margin-bottom: 5rem;
  color: #fff;
  background-color: #6469ff;
  font-weight: 500;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  width: 100%;
  padding: 0.625rem 1.25rem;
  text-align: center;
  border-color: transparent;

  @media (min-width: 640px) {
    width: auto;
  }
`;
