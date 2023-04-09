import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import PhotoContext from "./hooks/PhotoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <PhotoContext>
        <App />
      </PhotoContext>
    </React.StrictMode>
  </BrowserRouter>
);
