import { createFileRoute } from "@tanstack/react-router";
import { TeamMemberItem } from "@/components/team/team-member-item";
import "../../styles/team.css";

export const Route = createFileRoute("/_layout/team")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<div className="group-photo">
				<img src="/images/group_photo.jpg"></img>
			</div>
			<div className="green"></div>
			<div className="information">
				<h1>Behind the team</h1>
				<p>
					Stego Studios is a student project of the University of Melbourne's
					Game Makers' Club.
				</p>
				<p>
					Members are first vetted through an application process and their
					resumes are reviewed. They are given specific roles and divided into
					teams to simulate the environment of working in the games industry
				</p>
			</div>

			<div className="outer-rectangle">
				<div className="inner-rectangle">
					<p className="text">2024-2025 Teams</p>
				</div>
			</div>

			<div className="team">
				<h1>Team Aqua - Noelle's Ark</h1>
				<div className="team-photo" />
				<div className="team-list">
					<TeamMemberItem
						image="/images/stego.png"
						name="Han"
						role="Producer"
					/>
					<TeamMemberItem
						image="/images/stego.png"
						name="Kwan"
						role="Producer"
					/>
					<TeamMemberItem
						image="/images/stego.png"
						name="Iden"
						role="Producer"
					/>
					<TeamMemberItem
						image="/images/stego.png"
						name="Alex"
						role="Producer"
					/>
				</div>
			</div>
			<div className="team">
				{/* <h1>The Last Diner</h1>
				<p>Producer: Zimo</p>
				<p>Lead Programmer: </p>
				<p>Programming: </p>
				<p>Lead Artist: </p>
				<p>Artists: </p>
				<p>Lead Designer: </p>
				<p>Design: </p>
				<p>Music: </p> */}
			</div>
			<div className="team">
				{/* <h1>Trackline</h1>
				<p>Producer: Zimo</p>
				<p>Lead Programmer: </p>
				<p>Programming: </p>
				<p>Lead Artist: </p>
				<p>Artists: </p>
				<p>Lead Designer: </p>
				<p>Design: </p>
				<p>Music: </p> */}
			</div>
		</div>
	);
}
