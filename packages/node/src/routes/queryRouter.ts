import { router, dbProcedure } from "../appRouter";

export const connectRouter = router({
  getTables: dbProcedure.query(async ({ ctx }) => {
    const tables = await ctx.databaseConnection.meta.tables();
    return tables;
  }),
});
