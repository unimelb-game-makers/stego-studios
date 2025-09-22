import GamesHeader from "@/components/games-header";
import Showcase from "@/components/showcase";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/games/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <GamesHeader />
      <Showcase />
    </>
  );
}
