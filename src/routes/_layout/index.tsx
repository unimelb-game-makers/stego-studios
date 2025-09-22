import { createFileRoute } from "@tanstack/react-router";
import ScrollingBanner from "@/components/banner";
import { MainCarousel } from "@/components/carousel/main-carousel";
import Showcase from "@/components/showcase";

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MainCarousel />
      <ScrollingBanner />
      <Showcase />
    </>
  );
}
