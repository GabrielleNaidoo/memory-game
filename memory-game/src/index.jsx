import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CardContextProvider } from "../store/card-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CardContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </CardContextProvider>
);
