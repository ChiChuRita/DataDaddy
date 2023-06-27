#! /usr/bin/env node

import clientHandler from "serve-handler";
import { handler as nodeHandler } from "@datadaddy/node/dist/handler";
import http from "http";

const server = http.createServer((request, response) => {
  const devPath = "../../node_modules/@datadaddy/client/dist";
  const prodcutionPath = "/node_modules/@datadaddy/client/dist";

  if (request.url?.startsWith("/trpc")) {
    request.url = request.url.replace("/trpc", "");
    return nodeHandler(request, response);
  }

  return clientHandler(request, response, {
    public: devPath,
  });
});

server.listen(25566, () => {
  console.log("Running at http://localhost:25566");
});
