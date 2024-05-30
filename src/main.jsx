import React from "`react`";
import ReactDOM from "react-dom/client";
import "modern-normalize";
// import App from "./components/Button";
import { App } from "./components/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// import { App } from "./components/render-book";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
