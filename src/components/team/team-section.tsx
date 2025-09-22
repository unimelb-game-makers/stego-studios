import type { TeamMemberItemProps } from "@/components/team/team-member-item";
import { TeamMemberItem } from "@/components/team/team-member-item";

interface TeamSectionProps {
	title: string;
	bannerImage: string;
	members: TeamMemberItemProps[];
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
					<li key={m.name}>
						<TeamMemberItem {...m} />
					</li>
				))}
			</ul>
		</div>
	);
};

export { TeamSection };
