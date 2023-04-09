import React, { useState } from "react";
import closeBtn from "./../../assets/closeButton.svg";
import likes from "./../../assets/likes-icon.svg";
import download from "./../../assets/download-btn.png";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { IconContext } from "react-icons";
import FileSaver, { saveAs } from "file-saver";

import {
  ModalContainer,
  ModalDiv,
  ModalUser,
  UserImage,
  UserName,
  CloseButton,
  ModalImage,
  ModalPreBtn,
  ModalNxtBtn,
  DownloadBtn,
  LikesImage,
  UserLink,
} from "./PhotoModal.styled";

function PhotoModal(props) {
  const handleActions = (action) => {
    let i = props.item.i;
    if (action === "next-img" && props.dataArr.length - 1 > i)
      props.setItem({ img: props.dataArr[i + 1], i: i + 1 });
    else if (action === "prev-img" && i > 0)
      props.setItem({ img: props.dataArr[i - 1], i: i - 1 });
  };

  const handleClose = () => {
    props.setShowModal(false);
  };

  const handleDownload = () => {
    FileSaver.saveAs(props.item.img.urls.regular, "image.png");
  };

  return (
    <ModalContainer>
      <ModalDiv>
        <UserLink to={`/user/${props.item.img.user.username}`}>
          <ModalUser>
            <UserImage src={props.item.img.user.profile_image.small} />
            <UserName>{props.item.img.user.name}</UserName>
          </ModalUser>
        </UserLink>
        <CloseButton src={closeBtn} onClick={handleClose} />
        <ModalImage src={props.item.img.urls.regular} />
        <IconContext.Provider
          value={{ style: { width: "35px", height: "35px" } }}
        >
          <ModalNxtBtn onClick={() => handleActions("prev-img")}>
            <FaArrowCircleLeft />
          </ModalNxtBtn>

          <ModalPreBtn onClick={() => handleActions("next-img")}>
            <FaArrowCircleRight />
          </ModalPreBtn>
        </IconContext.Provider>
        <DownloadBtn src={download} onClick={handleDownload} />
        <LikesImage>
          <img src={likes} />
          <p>{props.item.img.likes}</p>
        </LikesImage>
      </ModalDiv>
    </ModalContainer>
  );
}

export default PhotoModal;
<IconContext.Provider
  value={{ color: "blue", className: "global-class-name" }}
></IconContext.Provider>;
