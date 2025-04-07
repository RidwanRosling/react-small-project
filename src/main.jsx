import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import "./react-project/style/faq.css";
import App from "./react-project/faq.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
