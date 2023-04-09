import React from "react";
import searchImage from "./../../assets/search-icon.png";
import {
  SearchBar,
  SearchIcon,
  InputField,
  SearchLink,
} from "./SearchField.styled";
import axios from "axios";
import { PhotoState } from "../../hooks/PhotoContext";

function SearchField() {
  const { searchValue, setSearchValue, setSearchData, setSearchImage } =
    PhotoState();

  const fetchSearchPhotos = async () => {
    const { data } = await axios.get(
      `${
        import.meta.env.VITE_REACT_APP_API_BASE_URL
      }/search/photos?page=1&query=${searchValue}&client_id=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );

    setSearchData(data.results);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleButtonSearch = () => {
    fetchSearchPhotos();
    setSearchValue("");
    setSearchImage(searchValue);
  };

  return (
    <SearchBar>
      <SearchLink to={`/search/${searchValue}`}>
        <SearchIcon
          src={searchImage}
          alt="search"
          onClick={handleButtonSearch}
          disabled={!searchValue}
        />
      </SearchLink>
      <InputField
        type="text"
        placeholder="Search.."
        value={searchValue}
        onChange={handleInputChange}
      />
    </SearchBar>
  );
}

export default SearchField;
