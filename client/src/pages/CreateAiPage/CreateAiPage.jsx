import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../../components/FormField/FormField";
import preview from "./../../assets/preview.png";
import { Oval } from "react-loader-spinner";
import { getRandomPrompt } from "./../../utils/index";
import {
  CreateSection,
  MainContainer,
  Header,
  Paragraph,
  CreateForm,
  FormWrapper,
  StyledDiv,
  StyledImg,
  StyledImage,
  LoaderDiv,
  GenarateBtnContainer,
  GenerateButton,
  ShareBtnContainer,
  ShareParagraph,
  ShareButton,
} from "./CreateAiPage.styled";

function CreateAiPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatePhoto, setGeneratePhoto] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const generateImage = () => {};

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {};

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <CreateSection>
      <MainContainer>
        <Header>Create</Header>
        <Paragraph>
          Generate an imaginative image through DALL-E AI and share it with the
          community
        </Paragraph>

        <CreateForm onSubmit={handleSubmit}>
          <FormWrapper>
            <FormField
              labelName="Your Name"
              type="text"
              name="name"
              placeholder="Ex., john doe"
              value={form.name}
              handleChange={handleChange}
            />

            <FormField
              labelName="Prompt"
              type="text"
              name="prompt"
              placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />
            <StyledDiv>
              {form.photo ? (
                <StyledImg src={form.photo} alt={form.prompt} />
              ) : (
                <StyledImage src={preview} alt="preview" />
              )}

              {generatePhoto && (
                <LoaderDiv>
                  <Oval
                    height={40}
                    width={40}
                    color="#5bd6e1"
                    secondaryColor="#DBD9D9"
                  />
                </LoaderDiv>
              )}
            </StyledDiv>
          </FormWrapper>
          <GenarateBtnContainer className="mt-5 flex gap-5">
            <GenerateButton type="button" onClick={generateImage}>
              {generatePhoto ? "Generating..." : "Generate"}
            </GenerateButton>
          </GenarateBtnContainer>

          <ShareBtnContainer>
            <ShareParagraph>
              ** Once you have created the image you want, you can share it with
              others in the community **
            </ShareParagraph>
            <ShareButton type="submit">
              {isLoading ? "Sharing..." : "Share with the Community"}
            </ShareButton>
          </ShareBtnContainer>
        </CreateForm>
      </MainContainer>
    </CreateSection>
  );
}

export default CreateAiPage;
