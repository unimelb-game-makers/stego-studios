import { createFileRoute } from "@tanstack/react-router";
import { TeamSection } from "@/components/team/team-section";
import "../../../styles/team.css";
import { getTeamMembers } from "@/data/teams";

export const Route = createFileRoute("/_layout/team/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<div className="group-photo">
				<img src="/images/group_photo.jpg" alt="group-photo"></img>
			</div>
			<div className="green"></div>
			<div className="information">
				<h1>Behind the team</h1>
				<p>
					Stego Studios is a student project of the University of Melbourne's
					Game Makers' Club.
					<br />
					<br />
					Members are first vetted through an application process and their
					resumes are reviewed. They are given specific roles and divided into
					teams to simulate the environment of working in the games industry.
				</p>
			</div>

			<div className="outer-rectangle">
				<div className="inner-rectangle">
					<p className="year">2024-2025 Teams</p>
				</div>
			</div>

			<div>
				<TeamSection
					name="Team Rocket"
					title="The Last Diner"
					bannerImage="/images/the-last-diner.png"
					members={getTeamMembers("Team Rocket") || []}
				/>
			</div>

			<div>
				<TeamSection
					name="Team Magma"
					title="Trackline"
					bannerImage="/images/trackline.png"
					members={getTeamMembers("Team Magma") || []}
				/>
			</div>

			<div>
				<TeamSection
					name="Team Aqua"
					title="Noelle's Ark"
					bannerImage="/images/noelles-ark.png"
					members={getTeamMembers("Team Aqua") || []}
				/>
			</div>
		</div>
	);
}
