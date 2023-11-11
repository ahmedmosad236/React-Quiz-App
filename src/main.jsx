import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QuestionsContaxtProvider } from "./contexts/QuestionsContaxt.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuestionsContaxtProvider>
      <App />
    </QuestionsContaxtProvider>
  </React.StrictMode>
);
