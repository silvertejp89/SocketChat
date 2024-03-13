import React from "react";
import ReactDOM from "react-dom/client";
import { RouterHolder } from "./Router.tsx";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterHolder />
  </React.StrictMode>
);
