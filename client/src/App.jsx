import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { darkTheme, lightTheme } from "./styles/themes";
import { HomePage, UserPage, AiPage } from "./pages";
import Navbar from "./components/Navbar/Navbar";
import SearchPage from "./pages/SearchPage/SearchPage";
import PhotoPage from "./pages/PhotoPage/PhotoPage";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Navbar toggleTheme={themeToggler} />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/Ai" element={<AiPage />} />
          <Route path="/photo/:id" element={<PhotoPage />} />
          <Route
            exact
            path="/search/:searchValue"
            element={<SearchPage />}
          ></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
