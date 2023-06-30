import { router, procedure } from "../trpc";
import { z } from "zod";

import knex from "knex";

export const connectRouter = router({
  connectSqlite: procedure
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
          },
          useNullAsDefault: true,
        })
      );
    }),

  connectMysql: procedure
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
          },
          useNullAsDefault: true,
        })
      );
    }),
});
