import styled from "styled-components";
import { Link } from "react-router-dom";

export const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalDiv = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.main};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  max-width: 95%;
  width: 750px;
  height: 600px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalUser = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  left: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: 7px;
`;

export const UserImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  border-radius: 4px;
  cursor: pointer;
`;

export const UserName = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-right: 7px;
  cursor: pointer;
`;

export const CloseButton = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const ModalImage = styled.img`
  height: 75%;
  width: 50%;
  object-fit: cover;
  border-radius: 5px;
`;

export const ModalPreBtn = styled.div`
  background: none;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  right: 20px;
  clolor: ${(props) => props.theme.main};
`;

export const ModalNxtBtn = styled.div`
  background: none;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  left: 20px;
  clolor: ${(props) => props.theme.main};
`;

export const DownloadBtn = styled.img`
  height: 30px;
  weight: 30px;
  position: absolute;
  bottom: 35px;
  right: 40px;
  cursor: pointer;
`;

export const LikesImage = styled.div`
  font-size: 35px;

  position: absolute;
  bottom: 35px;
  left: 40px;
  color: rgb(249, 24, 39);
  display: flex;
  align-items: center;

  p {
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
    color: ${(props) => props.theme.textColor};
  }
`;

export const UserLink = styled(Link)``;
