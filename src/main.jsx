import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

import React from "react";

// Создание корневого элемента для рендеринга приложения
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
