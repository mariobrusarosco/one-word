import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { WebSocketProvider } from "./domains/socket/providers/web-socket";
import { AppRouter } from "./domains/shared/components/app-router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const AppWithProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <WebSocketProvider>{children}</WebSocketProvider>
    </QueryClientProvider>
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
