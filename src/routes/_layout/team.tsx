import { PageUnderConstruction } from "@/components/page-under-construction";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/team")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageUnderConstruction />;
}
