import { router, dbProcedure } from "../trpc";
import { z } from "zod";

export const queryRouter = router({
  tables: dbProcedure.query(async ({ ctx }) => {
    const tables = await ctx.databaseConnection.meta.tables();
    return tables;
  }),

  query: dbProcedure
    .input(
      z.object({
        query: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const result = await ctx.databaseConnection.knex.raw(input.query);
      return result;
    }),
});
