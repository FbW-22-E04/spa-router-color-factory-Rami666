import React from "react";
import ReactDOM from "react-dom/client";
import Colors from "./Colors.js";
import { BrowserRouter } from "react-router-dom";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Colors />
    </BrowserRouter>
  </React.StrictMode>
);
