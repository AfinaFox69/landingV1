import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DesktopSize } from "./screens/DesktopSize/DesktopSize";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DesktopSize />
  </StrictMode>,
);
