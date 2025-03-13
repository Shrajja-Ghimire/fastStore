import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CombineRoute from "./Routing/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CombineRoute />
  </StrictMode>
);
