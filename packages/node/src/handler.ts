import { createHTTPHandler } from "@trpc/server/adapters/standalone";
import { appRouter } from "./appRouter";
import {
  databaseConnection,
  connectDatabase,
  disconnectDatabase,
} from "./database/database";
import cors from "cors";
import { inferAsyncReturnType } from "@trpc/server";

export const createContext = () => {
  return {
    databaseConnection: databaseConnection,
    connectDatabase,
    disconnectDatabase,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;

export const handler = createHTTPHandler({
  middleware: cors(),
  router: appRouter,
  createContext,
});
