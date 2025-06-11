import { createFileRoute } from "@tanstack/react-router";
import ScrollingBanner from "@/components/banner";
import Carousel from "@/components/carousel";
import Showcase from "@/components/showcase";

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Carousel />
      <ScrollingBanner />
      <Showcase />
    </>
  );
}
