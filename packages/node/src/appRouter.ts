import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const appRouter = t.router({
  hello: t.procedure.query(() => {
    return "hello world";
  }),
});

export type AppRouter = typeof appRouter;
