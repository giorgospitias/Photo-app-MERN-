import React from "react";
import {
  ModalContainer,
  ModalDiv,
  ModalUser,
  UserImage,
  UserName,
  UserLastName,
  CloseButton,
  ModalImage,
  ModalPreBtn,
  ModalNxtBtn,
  DownloadBtn,
  LikesImage,
} from "./PhotoModal.styled";

function PhotoModal({ data }) {
  console.log(data);
  return (
    <ModalContainer>
      <ModalDiv>
        <ModalUser>
          <UserImage />
          <UserName></UserName>
          <UserLastName></UserLastName>
        </ModalUser>
        <CloseButton />
        <ModalImage />
        <ModalPreBtn>
          <img />
        </ModalPreBtn>
        <ModalNxtBtn>
          <img />
        </ModalNxtBtn>
        <DownloadBtn />
        <LikesImage>
          <p></p>
        </LikesImage>
      </ModalDiv>
    </ModalContainer>
  );
}

export default PhotoModal;
