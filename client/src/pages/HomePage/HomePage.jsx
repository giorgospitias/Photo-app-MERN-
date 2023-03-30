import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  GalleryContainer,
  ImagesContainer,
  LoaderContainer,
} from "./HomePage.styled";
import { Oval } from "react-loader-spinner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PhotoModal from "../../components/PhotoModal/PhotoModal";

function Homepage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState([{ img: "", i: 0 }]);

  const fetchImages = async () => {
    const { data } = await axios.get(
      `${
        import.meta.env.VITE_REACT_APP_API_BASE_URL
      }/photos?page=${page}&per_page=10&client_id=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    console.log(data);
    setData((prev) => [...prev, ...data]);
    setLoading(false);
  };
  useEffect(() => {
    fetchImages();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollHeight + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(false);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (img, i) => {
    setCurrentPhoto({ img, i });
    setShowModal(true);
  };
  console.log(showModal);
  return (
    <>
      {loading ? (
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
        <GalleryContainer>
          <ImagesContainer>
            {showModal && (
              <PhotoModal
                item={currentPhoto}
                setItem={setCurrentPhoto}
                setShowModal={setShowModal}
                dataArr={data}
              />
            )}
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 900: 2, 1285: 3 }}
            >
              <Masonry gutter="16px">
                {data.map((image, index) => (
                  <img
                    key={index}
                    src={image.urls.regular}
                    style={{ width: "100%", display: "block" }}
                    alt={data.alt_description}
                    onClick={() => handleClick(image, index)}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </ImagesContainer>
        </GalleryContainer>
      )}
    </>
  );
}

export default Homepage;
