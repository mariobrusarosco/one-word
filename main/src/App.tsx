import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppRouter } from "./domains/shared/components/app-router";
import { useAppTheme } from "./domains/ui-system/theming/theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const AppWithProviders = ({ children }: { children: React.ReactNode }) => {
  const { AppThemeProvider } = useAppTheme();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
      {AppThemeProvider ? (
        <AppThemeProvider defaultTheme="dark">{children}</AppThemeProvider>
      ) : (
        children
      )}
    </QueryClientProvider>
  );
};

const App = () => {
  return (
    <AppWithProviders>
      <AppRouter />
    </AppWithProviders>
  );
};

export { App };
