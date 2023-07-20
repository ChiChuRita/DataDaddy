import { Router, Route, RootRoute } from "@tanstack/router";
import Layout from "./pages/Layout";
import TabView from "./tabs/TabView";

// Create a root route
const rootRoute = new RootRoute({
  component: Layout,
});

// Create an index route
const mainRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: TabView,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

function About() {
  return <div>Hello from About!</div>;
}

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([mainRoute, aboutRoute]);

// Create the router using your route tree
export const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
