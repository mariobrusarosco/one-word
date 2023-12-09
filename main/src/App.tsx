import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Games } from "./domains/games/components/Games";
import { Tables } from "./domains/tables/components/Tables";
import { Learnings } from "./domains/shared/components/learnings";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tables />
      <Games />
      <Learnings />
    </QueryClientProvider>
  );
}

export default App;
