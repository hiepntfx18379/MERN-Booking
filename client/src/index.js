import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SeacrchContextProvider } from "./context/searchContext";
import { AuthContextProvider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SeacrchContextProvider>
        <App />
      </SeacrchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
