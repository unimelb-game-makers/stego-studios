import { Link } from "@tanstack/react-router";
import type { Team } from "@/types/team";

interface TeamSectionProps {
	name: string;
	title: string;
	bannerImage: string;
	members: Team;
}

const TeamSection = ({ name, title, bannerImage, members }: TeamSectionProps) => {
	return (
		<div className="team">
			<h1 className="team-name">{title}</h1>

			<div
				className="team-banner"
				style={{ backgroundImage: `url(${bannerImage})` }}
				role="img"
			/>

			<ul className="team-list">
				{members.map((m) => (
					<li key={m.name}>
						<Link
							to="/team/$team/$member"
							params={{
								team: name,
								member: m.name,
							}}
							className="team-member"
						>
							<img src={m.imageUrl ?? "/images/stego.png"} alt={m.name} />
							<p>
								{m.name}
								<br />
								{m.role}
							</p>
						</Link>
					</li>
				))}
			</ul>

		</div>
	);
};

export { TeamSection };
