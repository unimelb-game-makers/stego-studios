import { createFileRoute } from "@tanstack/react-router";
import { PageUnderConstruction } from "@/components/page-under-construction";

export const Route = createFileRoute("/_layout/team/$team/$member")({
	component: RouteComponent,
});

function RouteComponent() {
	const { team: _team, member: _member } = Route.useParams();
	return <PageUnderConstruction />;
}
