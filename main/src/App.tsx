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
  // const  = useAppTheme();

  // console.log({ ThemeProvider });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {/* {Provider ? (
        <Provider defaultTheme="dark">{children}</Provider>
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
