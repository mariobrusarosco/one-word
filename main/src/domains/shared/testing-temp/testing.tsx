import {
  AsyncToggle,
  DynamicListGames,
  DynamicListTables,
  StaticListGames,
  Toggle,
} from "./components";

const Testing = () => {
  return (
    <>
      <h2>Testing</h2>
      <StaticListGames />
      <DynamicListGames />
      <Toggle />
      <AsyncToggle />
      <DynamicListTables />
    </>
  );
};

export default Testing;
