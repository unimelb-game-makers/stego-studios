import type { Team } from "@/types/team";

interface TeamSectionProps {
	title: string;
	bannerImage: string;
	members: Team;
}

const TeamSection = ({ title, bannerImage, members }: TeamSectionProps) => {
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
					<li key={m.name} className="team-member">
						<img src={m.imageUrl ?? "/images/stego.png"} alt={m.name} />
						<p>{m.name}</p>
						<p>{m.role}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export { TeamSection };
