import { RootRoute, Route, Router } from "@tanstack/router";

import RootLayout from "./pages/RootLayout";
import Index from "./pages/Index";
import Construction from "./pages/Construction";

const rootRoute = new RootRoute({
  component: RootLayout,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const connectionRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/connect",
  component: Construction,
});

rootRoute.addChildren([indexRoute, connectionRoute]);

export const router = new Router({
  routeTree: rootRoute,
});

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
