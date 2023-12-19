import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
