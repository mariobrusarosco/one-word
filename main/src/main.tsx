import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const enableApiMocking = async () => {
  if (process.env.NODE_ENV !== "development") return;

  const { worker } = await import("./mocks/browser");

  await worker.start();
};

enableApiMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
