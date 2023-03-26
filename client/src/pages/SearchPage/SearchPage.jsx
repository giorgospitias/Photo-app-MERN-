import React from "react";
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

function SearchPage() {
  const { searchValue, searchData, searchImage } = PhotoState();
  console.log(searchData);
  return (
    <MainContainer>
      <InnerContainer>
        <ResultsTextWrapper>
          Search Results for <SearchValueSpan>{searchImage}</SearchValueSpan>
        </ResultsTextWrapper>
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
      </InnerContainer>
    </MainContainer>
  );
}

export default SearchPage;
