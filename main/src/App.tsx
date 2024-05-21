import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppRouter } from "./domains/shared/components/app-router";
import { useAppTheme } from "./domains/ui-system/theming/theme";

// import { useTheme } from "./domains/ui-system/theming/theme-provider";

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
      {/* {AppThemeProvider ? (
        <AppThemeProvider defaultTheme="dark">{children}</AppThemeProvider>
      ) : (
        children
      )} */}
      {children}
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
