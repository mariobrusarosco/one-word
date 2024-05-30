import React from "react";
import ReactDOM from "react-dom/client";
import { setApiMockingWhenInDevMode } from "./domains/shared/utils/dev-api-mocking.ts";
import { App } from "./App.tsx";

const runWebApp = async () => {
  await setApiMockingWhenInDevMode();

  ReactDOM.createRoot(document.querySelector(".root")!).render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
  );
};

runWebApp();
