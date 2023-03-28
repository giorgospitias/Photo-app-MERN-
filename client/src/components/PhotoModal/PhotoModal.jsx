import React, { useState } from "react";
import closeBtn from "./../../assets/closeButton.svg";
import nextBtn from "./../../assets/arrow-left-light.png";
import preBtn from "./../../assets/arrow-right-light.png";
import likes from "./../../assets/likes-icon.svg";
import download from "./../../assets/download-btn.png";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { IconContext } from "react-icons";

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
} from "./PhotoModal.styled";

function PhotoModal(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = props.item.img.urls.download;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ModalContainer>
      <ModalDiv>
        <ModalUser>
          <UserImage src={props.item.img.user.profile_image.small} />
          <UserName>{props.item.img.user.name}</UserName>
        </ModalUser>
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
