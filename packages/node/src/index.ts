import { createHTTPHandler } from "@trpc/server/adapters/standalone";
import { createServer } from "http";

import { appRouter } from "./appRouter";
import cors from "cors";

const devHandler = createHTTPHandler({
  middleware: cors(),
  router: appRouter,
  createContext: () => {
    return {};
  },
});

const server = createServer((req, res) => {
  if (req.url?.startsWith("/trpc")) {
    req.url = req.url.replace("/trpc", "");
    return devHandler(req, res);
  }

  res.writeHead(400);
  return res.end("Please use trpc!");
});

server.listen(3333, () => {
  console.log("dev server started on: http://localhost:3333/trpc");
});
