import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { GalleryContainer, ImagesContainer, Image } from "./HomePage.styled";

function Homepage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const apiKey = "6FfCSdsWANiliNHw7-a--rFRXS5C-6x4fFqwKXqv6ZE";

  const fetchImages = async () => {
    const { data } = await axios.get(
      `https://api.unsplash.com/photos?page=${page}&per_page=20&client_id=${apiKey}`
    );
    console.log(data);
    setData((prev) => [...prev, ...data]);
  };
  useEffect(() => {
    fetchImages();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollHeight + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <GalleryContainer>
      <ImagesContainer>
        {data.map((photo, index) => (
          <Image src={photo?.urls?.regular} alt="photo" />
        ))}
      </ImagesContainer>
    </GalleryContainer>
  );
}

export default Homepage;
