import { RootRoute, Router } from "@tanstack/router";

import Home from "./pages/Home";

const rootRoute = new RootRoute({
  component: Home,
});

export const router = new Router({
  routeTree: rootRoute,
});

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
