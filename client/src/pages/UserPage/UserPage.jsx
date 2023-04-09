import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  MainContainer,
  Container,
  UserContainer,
  UserName,
  Bio,
  InstagramUser,
  StatsContainer,
  StyledImage,
  StyledDiv,
  StyledNumbers,
} from "./UserPage.styled";
import PhotosUser from "../../components/PhotosUser/PhotosUser";

function UserPage() {
  const [data, setData] = useState([]);
  const params = useParams();

  const fetchUsers = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/users/${
        params.id
      }?client_id=${import.meta.env.VITE_REACT_APP_API_KEY}`
    );

    setData(data);
  };
  console.log(params.id);
  useEffect(() => {
    fetchUsers();
  }, [params.id]);

  return (
    <MainContainer>
      <Container>
        <>
          <UserContainer>
            <StyledImage src={data?.profile_image?.large} alt={data.name} />
            <UserName>{data.name}</UserName>
            {data.bio && <Bio>{data.bio}</Bio>}
            {data.instagram_username && (
              <InstagramUser
                href={`https://www.instagram.com/${data.instagram_username}`}
                target="_blank"
              >
                @{data.instagram_username}
              </InstagramUser>
            )}
            <StatsContainer>
              <StyledDiv>
                <StyledNumbers>{data.downloads}</StyledNumbers>
                <div>Downloads</div>
              </StyledDiv>
              <StyledDiv>
                <StyledNumbers>{data.followers_count}</StyledNumbers>
                <div>Followers</div>
              </StyledDiv>
              <StyledDiv>
                <StyledNumbers>{data.following_count}</StyledNumbers>
                <div>Following</div>
              </StyledDiv>
            </StatsContainer>
          </UserContainer>
          <PhotosUser username={params.id} />
        </>
      </Container>
    </MainContainer>
  );
}

export default UserPage;
