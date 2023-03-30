import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaHeart, FaRegStar, FaStar, FaEye } from "react-icons/fa";
import { Oval } from "react-loader-spinner";
import {
  Container,
  StyledLink,
  ImageContainer,
  TagLink,
  UserImage,
  MainImage,
  StyledDiv,
  Tags,
  LoaderContainer,
} from "./PhotoPage.styled";
import Icon from "../../components/Icon/Icon";

function PhotoPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const tagsAvailable = data && data.tags?.length > 0;

  const fetchPhoto = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/photos/${
        params.id
      }?client_id=${import.meta.env.VITE_REACT_APP_API_KEY}`
    );
    console.log(data);
    setData(data);
    setIsLoading(false);
  };
  console.log(params.id);
  useEffect(() => {
    fetchPhoto();
  }, [params.id]);

  return (
    <>
      {isLoading ? (
        <LoaderContainer>
          <Oval
            height={80}
            width={80}
            color="#5bd6e1"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#DBD9D9"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </LoaderContainer>
      ) : (
        <Container>
          <StyledLink to={`/user/${data.user?.username}`}>
            <UserImage
              src={data.user?.profile_image?.medium}
              alt={data.user?.username}
            />
            <h4>{data.user?.name}</h4>
          </StyledLink>
          <ImageContainer backgroundColor={data?.color}>
            <MainImage src={data.urls?.regular} alt={data.alt_description} />
          </ImageContainer>
          <StyledDiv>
            <Icon
              icon={<FaHeart />}
              stats={data.likes}
              color="#FF4557"
              type="heart"
            />
            <Icon icon={<FaEye />} stats={data.views} />

            <Icon icon={<FaStar />} stats="" color="#F6CF58" type="star" />
          </StyledDiv>
          <Tags>
            {tagsAvailable &&
              data.tags
                .filter((tag, index) => index < 6)
                .map((tag) => <TagLink>{tag.title}</TagLink>)}
          </Tags>
        </Container>
      )}
    </>
  );
}

export default PhotoPage;
