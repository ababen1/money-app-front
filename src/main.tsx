import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { EntriesProvider } from "./context/WalletContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EntriesProvider>
      <App />
    </EntriesProvider>
  </StrictMode>
);
