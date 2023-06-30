import { router } from "./trpc";

import { connectRouter } from "./routes/connectRouter";
import { queryRouter } from "./routes/queryRouter";

export const appRouter = router({
  connect: connectRouter,
  query: queryRouter,
});

export type AppRouter = typeof appRouter;
