import React, { useState } from "react";

import { downloadImage } from "../../utils";
import download from "./../../assets/download.png";
import {
  AiPhotosContainer,
  AiImg,
  PhotoDescription,
  StyledDiv,
  SubDiv,
  NameDiv,
  StyledButton,
  DownloadImg,
} from "./Aiphoto.styled";

function AiPhoto({ _id, name, prompt, photo }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  console.log(isHovered);
  return (
    <AiPhotosContainer
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <AiImg src={photo} alt={prompt} />
      {isHovered && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxHeight: "94.5%",
            backgroundColor: "#10131f",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            margin: "0.5rem",
            padding: "1rem",
            borderRadius: "0.375rem",
          }}
        >
          <PhotoDescription>{prompt}</PhotoDescription>
          <StyledDiv>
            <SubDiv>
              <NameDiv>{name[0]}</NameDiv>
            </SubDiv>
            <StyledButton
              type="button"
              onClick={() => downloadImage(_id, photo)}
            >
              <DownloadImg src={download} alt="download" />
            </StyledButton>
          </StyledDiv>
        </div>
      )}
    </AiPhotosContainer>
  );
}

export default AiPhoto;
