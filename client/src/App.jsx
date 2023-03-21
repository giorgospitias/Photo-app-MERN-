import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, UserPage, AiPage } from "./pages";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/Ai" element={<AiPage />} />
      </Routes>
    </>
  );
}

export default App;
