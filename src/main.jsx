import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import "./react-project/style/faq.css";
// import App from "./react-project/carousel.jsx";
// import Faq from "./react-project/faq.jsx";
import TextExpander from "./react-project/textExpander.jsx";
import App from "./react-project/textExpander.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Faq /> */}
    <App />
  </StrictMode>
);
