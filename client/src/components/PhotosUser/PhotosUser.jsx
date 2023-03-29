import React, { useState, useEffect } from "react";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";
import { ThreeDots } from "react-loader-spinner";
import {
  MainContainer,
  SubContainer,
  StyledImage,
  StyledLink,
  StyledParagraph,
} from "./PhotosUser.styled";

function PhotosUser(props) {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const hasPhotos = data.length === 0;

  const fetchUserPhotos = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/users/${
        props.username
      }/photos?page=${page}&per_page=12&client_id=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    console.log(data);
    setData((prevData) => [...prevData, ...data]);
    setHasMore(data.length > 0);
    setPage((prevPage) => prevPage + 1);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUserPhotos();
  }, [props.username]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : hasPhotos ? (
        <p>This user has no photos</p>
      ) : (
        <InfiniteScroll
          dataLength={data.length}
          next={fetchUserPhotos}
          hasMore={hasMore}
          loader={
            <ThreeDots height="80" width="80" radius="9" color="#5bd6e1" />
          }
        >
          <MainContainer>
            <SubContainer>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 900: 2, 1285: 3 }}
                gutter="0"
              >
                <Masonry>
                  {data.map((photo) => {
                    return (
                      <StyledLink to={`/photo/${photo.id}`} key={photo.id}>
                        <StyledImage src={photo.urls.small} alt={photo.id} />
                      </StyledLink>
                    );
                  })}
                </Masonry>
              </ResponsiveMasonry>
            </SubContainer>
          </MainContainer>
        </InfiniteScroll>
      )}
    </>
  );
}

export default PhotosUser;
