import { Outlet, useLoaderData } from "react-router-dom";

const RootLayout = () => {
  const test = useLoaderData();
  console.log({ test });
  return (
    <div style={{ border: "1px solid red" }}>
      <h1>Root Layout</h1>
      <Outlet />
    </div>
  );
};

export default RootLayout;
