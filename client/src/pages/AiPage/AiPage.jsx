import React, { useState, useEffect } from "react";
import AiPhoto from "./../../components/AiPhoto/AiPhoto";
import FormField from "./../../components/FormField/FormField";
import { Oval } from "react-loader-spinner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  AiSection,
  CreateLink,
  CreateButton,
  MainContainer,
  Header,
  Paragraph,
  FormFieldContainer,
  Container,
  InnerContainer,
  SearchHeader,
  PhotoHeader,
  ResultsContainer,
} from "./AiPage.styled";

const RenderPhotos = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((photo) => <AiPhoto key={photo.id} {...photo} />);
  }
  return <PhotoHeader>{title}</PhotoHeader>;
};

function AiPage() {
  const [allPhotos, setAllPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  return (
    <AiSection>
      <MainContainer>
        <CreateLink to="/ai/create">
          <CreateButton>Create</CreateButton>
        </CreateLink>
        <Header>The Community Showcase</Header>
        <Paragraph>
          Browse through a collection of imaginative and visually stunning
          images generated by DALL-E AI
        </Paragraph>

        <FormFieldContainer>
          <FormField />
        </FormFieldContainer>

        <Container>
          {isLoading ? (
            <InnerContainer>
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
            </InnerContainer>
          ) : (
            <>
              {searchText && (
                <SearchHeader>
                  Showing results for{" "}
                  <span style={{ color: "#222328" }}>{searchText}</span>
                </SearchHeader>
              )}
            </>
          )}
        </Container>

        <ResultsContainer>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 900: 2, 1285: 3 }}
            gutter="0"
          >
            <Masonry>
              {searchText ? (
                <RenderPhotos data={[]} title="No search results" />
              ) : (
                <RenderPhotos data={[]} title="No photo found" />
              )}
            </Masonry>
          </ResponsiveMasonry>
        </ResultsContainer>
      </MainContainer>
    </AiSection>
  );
}

export default AiPage;
