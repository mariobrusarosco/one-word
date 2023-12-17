import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Games } from "./domains/games/components/Games";
import { Tables } from "./domains/tables/components/Tables";

const queryClient = new QueryClient();

const AppWithProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

function App() {
  return (
    <AppWithProviders>
      <Tables />
      <Games />
      {/* <Testing /> */}
    </AppWithProviders>
  );
}

export default App;
