import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Tables } from "./domains/tables/api/components/Tables";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tables />
    </QueryClientProvider>
  );
}

export default App;
