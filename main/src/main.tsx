import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { setApiMockingWhenInDevMode } from "./domains/shared/utils/dev-api-mocking.ts";

const runWebApp = async () => {
  await setApiMockingWhenInDevMode();

  ReactDOM.createRoot(document.querySelector(".root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

runWebApp();
