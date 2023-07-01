import { useState } from "react";

import { httpBatchLink } from "@trpc/client";
import { trpc } from "./utils/trpc";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./pages/Layout";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url:
            process.env.NODE_ENV === "production"
              ? "/trpc"
              : "http://localhost:3333/trpc",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default App;
