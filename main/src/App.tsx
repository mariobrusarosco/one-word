import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./domains/shared/components/app-router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

const AppWithProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

function App() {
  return (
    <AppWithProviders>
      <AppRouter />
    </AppWithProviders>
  );
}

export default App;
