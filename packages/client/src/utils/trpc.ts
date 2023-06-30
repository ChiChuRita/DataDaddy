import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@datadaddy/node/src/appRouter";

export const trpc = createTRPCReact<AppRouter>();
