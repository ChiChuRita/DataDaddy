import { useState } from "react";

import { httpBatchLink } from "@trpc/client";
import { trpc } from "./utils/trpc";

import { RouterProvider } from "@tanstack/react-router";
import { router } from "./Router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
        <RouterProvider router={router} />
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default App;
