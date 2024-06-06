import { useRouteError } from "react-router-dom";

const ErrorScreen = () => {
  const error = useRouteError() as {
    statusText: string;
    message: string;
  };

  return (
    <div>
      <h1 className="text-5xl text-pink-500">Ops! Something went wrong</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorScreen;
