import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { GalleryContainer, ImagesContainer } from "./HomePage.styled";

function Homepage() {
  const [data, setData] = useState([]);

  const apiKey = "Aw40CRz27Be_y31HZk96E7jVs2CEiQfZpBp7SfvY6g0";

  const fetchImages = async () => {
    const { data } = await axios.get(
      `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=30`
    );
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    fetchImages();
  });
  return (
    <GalleryContainer>
      <ImagesContainer>
        {data.map((data) => (
          <img />
        ))}
      </ImagesContainer>
    </GalleryContainer>
  );
}

export default Homepage;
