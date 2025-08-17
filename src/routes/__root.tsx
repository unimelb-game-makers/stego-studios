import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import NotFoundPage from "@/components/not-found-page";
import { type RouterContext } from "@/main";

export const Route = createRootRouteWithContext<RouterContext>()({
  component: Outlet,
  notFoundComponent: NotFoundPage,
});
