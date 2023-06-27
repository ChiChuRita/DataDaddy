import { createHTTPHandler } from "@trpc/server/adapters/standalone";
import { appRouter } from "./appRouter";

export const handler = createHTTPHandler({
  router: appRouter,
  createContext: () => {
    return {};
  },
});
