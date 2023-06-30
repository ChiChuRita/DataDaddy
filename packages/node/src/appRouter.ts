import { TRPCError, initTRPC } from "@trpc/server";
import { Context } from "./handler";

import { connectRouter } from "./routes/connectRoute";

const t = initTRPC.context<Context>().create();

export const middleware = t.middleware;
export const router = t.router;
export const procedure = t.procedure;

const isConnected = middleware(({ next, ctx }) => {
  if (!ctx.databaseConnection.connected) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Not connected to database",
    });
  }

  return next({
    ctx: { databaseConnection: ctx.databaseConnection },
  });
});

export const dbProcedure = procedure.use(isConnected);

export const appRouter = t.router({
  connect: connectRouter,
});

export type AppRouter = typeof appRouter;
