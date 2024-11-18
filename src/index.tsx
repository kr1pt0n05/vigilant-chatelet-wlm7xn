import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./Demo";
import AlignedItemList from "./List";
import IconChips from "./Like";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Demo />
      <AlignedItemList />
    </StyledEngineProvider>
  </React.StrictMode>
);
