import React, { createContext, useContext, useEffect, useState } from "react";

const Photo = createContext();

const PhotoContext = ({ children }) => {
  const [searchData, setSearchData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchImage, setSearchImage] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  return (
    <Photo.Provider
      value={{
        searchData,
        setSearchData,
        searchValue,
        setSearchValue,
        searchImage,
        setSearchImage,
        hasMore,
        setHasMore,
        page,
        setPage,
      }}
    >
      {children}
    </Photo.Provider>
  );
};

export default PhotoContext;

export const PhotoState = () => {
  return useContext(Photo);
};
