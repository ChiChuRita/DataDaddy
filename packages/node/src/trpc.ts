import { initTRPC, TRPCError } from "@trpc/server";
import { Context } from "./handler";

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
