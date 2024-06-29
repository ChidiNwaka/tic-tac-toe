import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

/**


const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

**/

const domNode = document.getElementById("root")
const root = createRoot(domNode);

root.render(
    <App />
);
