import GamesHeader from "@/components/games-header";
import Showcase from "@/components/showcase";
import { createFileRoute } from "@tanstack/react-router";
import { upcoming, noellesArk, theLastDiner, trackline } from "@/data/games";

export const Route = createFileRoute("/_layout/games/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <GamesHeader year={2026}/>
      <Showcase games={[upcoming, upcoming, upcoming]}/>
      <GamesHeader year={2025}/>
      <Showcase games={[noellesArk, theLastDiner, trackline]}/>
    </>
  );
}
