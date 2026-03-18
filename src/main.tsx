import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import FontContextProvider from "./components/context/font-context/FontContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FontContextProvider>
      <App />
    </FontContextProvider>
  </StrictMode>,
);
