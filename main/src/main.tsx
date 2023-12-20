import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { devApiMocking } from "./domains/shared/utils/dev-api-mocking.ts";

devApiMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
  );
});
