import { createHTTPHandler } from "@trpc/server/adapters/standalone";
import { createServer } from "http";

import { handler } from "./handler";
import { appRouter } from "./appRouter";

const server = createServer((req, res) => {
  if (req.url?.startsWith("/trpc")) {
    req.url = req.url.replace("/trpc", "");
    return handler(req, res);
  }

  res.writeHead(400);
  return res.end("Please use trpc!");
});

server.listen(3333, () => {
  console.log("dev server started on: http://localhost:3333/trpc");
});
