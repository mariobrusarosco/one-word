import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Games } from "./domains/games/components/Games";
// import { Tables } from "./domains/tables/components/Tables";
import { Chat } from "./domains/chat";
import { WebSocketProvider } from "./domains/socket/providers/web-socket";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WebSocketProvider>
        {/* <Tables /> */}
        {/* <Games /> */}
        <Chat />
      </WebSocketProvider>
    </QueryClientProvider>
  );
}

export default App;
