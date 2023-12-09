import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Games } from "./domains/games/components/Games";
import { Tables } from "./domains/tables/components/Tables";
import { AppRouter } from "./domains/shared/components/app-router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
