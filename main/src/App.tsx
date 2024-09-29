import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppRouter } from "./domains/shared/components/app-router";
import { useAppTheme } from "./domains/ui-system/theming/theme";
import { Auth0Provider } from "@auth0/auth0-react";

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

      <Auth0Provider
        domain="one-word.us.auth0.com"
        clientId="tcjyM0W3qxV5lcgec3l0yu72V6a0XAya"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <AppThemeProvider defaultTheme="dark">{children}</AppThemeProvider>
      </Auth0Provider>
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
