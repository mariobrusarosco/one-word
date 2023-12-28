import { useRouteError } from "react-router-dom";

export const ErrorScreen = () => {
  const error = useRouteError() as {
    statusText: string;
    message: string;
  };

  return (
    <div>
      <h1>Ops! Something went wrong</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
