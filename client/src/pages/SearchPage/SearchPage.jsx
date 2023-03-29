import React, { useEffect } from "react";
import axios from "axios";
import {
  MainContainer,
  InnerContainer,
  ResultsTextWrapper,
  SearchValueSpan,
  ResultsContainer,
  StyledLink,
  StyledImage,
  StyledDiv,
} from "./SearchPage.styled";
import { PhotoState } from "../../hooks/PhotoContext";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ThreeDots } from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";

function SearchPage() {
  const {
    searchData,
    setSearchData,
    searchImage,
    page,
    setPage,
    hasMore,
    setHasMore,
  } = PhotoState();

  const fetchMorePhotos = async () => {
    const { data } = await axios.get(
      `${
        import.meta.env.VITE_REACT_APP_API_BASE_URL
      }/search/photos?page=${page}&query=${searchImage}&client_id=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    console.log(data);
    setSearchData((prevData) => [...prevData, ...data.results]);
    setHasMore(data.results.length > 0);
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchMorePhotos();
  }, [searchImage]);

  console.log(searchData);
  return (
    <MainContainer>
      <InnerContainer>
        <ResultsTextWrapper>
          Search Results for <SearchValueSpan>{searchImage}</SearchValueSpan>
        </ResultsTextWrapper>
        <InfiniteScroll
          dataLength={searchData.length}
          next={fetchMorePhotos}
          hasMore={hasMore}
          loader={
            <ThreeDots height="80" width="80" radius="9" color="#5bd6e1" />
          }
        >
          <ResultsContainer>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 900: 2, 1285: 3 }}
              gutter="0"
            >
              <Masonry>
                {searchData.map((photo) => {
                  return (
                    <StyledLink key={photo.id} to={`/photo/${photo.id}`}>
                      <StyledDiv backgroundColor={photo.color}>
                        <StyledImage src={photo.urls.small} alt={photo.id} />
                      </StyledDiv>
                    </StyledLink>
                  );
                })}
              </Masonry>
            </ResponsiveMasonry>
          </ResultsContainer>
        </InfiniteScroll>
      </InnerContainer>
    </MainContainer>
  );
}

export default SearchPage;
