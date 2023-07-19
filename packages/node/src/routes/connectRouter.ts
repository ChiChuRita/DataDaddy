import { router, procedure } from "../trpc";
import { z } from "zod";

import knex from "knex";

export const connectRouter = router({
  test: procedure.query(({ ctx }) => {
    return ctx.databaseConnection.connected;
  }),
  disconnect: procedure.mutation(({ ctx }) => {
    ctx.disconnectDatabase();
  }),
  sqlite: procedure
    .input(
      z.object({
        databasePath: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      ctx.connectDatabase(
        "sqlite",
        knex({
          client: "sqlite3",
          connection: {
            filename: input.databasePath,
            dateStrings: true,
          },
          useNullAsDefault: true,
        })
      );
    }),

  mysql: procedure
    .input(
      z.object({
        host: z.string(),
        user: z.string(),
        password: z.string(),
        database: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      ctx.connectDatabase(
        "mysql",
        knex({
          client: "mysql",
          connection: {
            host: input.host,
            user: input.user,
            password: input.password,
            database: input.database,
            dateStrings: true,
          },
          useNullAsDefault: true,
        })
      );
    }),

  postgres: procedure
    .input(
      z.object({
        host: z.string(),
        user: z.string(),
        password: z.string(),
        database: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      ctx.connectDatabase(
        "postgres",
        knex({
          client: "pg",
          connection: {
            host: input.host,
            user: input.user,
            password: input.password,
            database: input.database,
            dateStrings: true,
          },
          useNullAsDefault: true,
        })
      );
    }),
});
