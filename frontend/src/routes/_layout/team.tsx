import { createFileRoute } from "@tanstack/react-router";
import { TeamSection } from "@/components/team/team-section";
import "../../styles/team.css";

export const Route = createFileRoute("/_layout/team")({
	component: RouteComponent,
});

const aquaMembers = [
	{ image: "/images/stego.png", name: "Han", role: "Producer" },
	{ image: "/images/stego.png", name: "Kwan", role: "Producer" },
	{ image: "/images/stego.png", name: "Iden", role: "Producer" },
	{ image: "/images/stego.png", name: "Alex", role: "Producer" },
	{ image: "/images/stego.png", name: "Han", role: "Producer" },
	{ image: "/images/stego.png", name: "Kwan", role: "Producer" },
	{ image: "/images/stego.png", name: "Iden", role: "Producer" },
	{ image: "/images/stego.png", name: "Alex", role: "Producer" },
];

const rocketMembers = [
	{ image: "/images/stego.png", name: "Han", role: "Producer" },
	{ image: "/images/stego.png", name: "Kwan", role: "Producer" },
	{ image: "/images/stego.png", name: "Iden", role: "Producer" },
	{ image: "/images/stego.png", name: "Alex", role: "Producer" },
	{ image: "/images/stego.png", name: "Han", role: "Producer" },
	{ image: "/images/stego.png", name: "Kwan", role: "Producer" },
	{ image: "/images/stego.png", name: "Iden", role: "Producer" },
	{ image: "/images/stego.png", name: "Alex", role: "Producer" },
];

const magmaMembers = [
	{ image: "/images/stego.png", name: "Han", role: "Producer" },
	{ image: "/images/stego.png", name: "Kwan", role: "Producer" },
	{ image: "/images/stego.png", name: "Iden", role: "Producer" },
	{ image: "/images/stego.png", name: "Alex", role: "Producer" },
	{ image: "/images/stego.png", name: "Han", role: "Producer" },
	{ image: "/images/stego.png", name: "Kwan", role: "Producer" },
	{ image: "/images/stego.png", name: "Iden", role: "Producer" },
	{ image: "/images/stego.png", name: "Alex", role: "Producer" },
];

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
					<p className="year">2024-2025 Teams</p>
				</div>
			</div>

			<div>
				<TeamSection
					title="Team Rocket - The Last Diner"
					bannerImage="/images/the-last-diner.png"
					members={rocketMembers}
				/>
			</div>

			<div>
				<TeamSection
					title="Team Magma - Trackline"
					bannerImage="/images/trackline.png"
					members={magmaMembers}
				/>
			</div>

			<div>
				<TeamSection
					title="Team Aqua - Noelle's Ark"
					bannerImage="/images/noelles-ark.png"
					members={aquaMembers}
				/>
			</div>
		</div>
	);
}
