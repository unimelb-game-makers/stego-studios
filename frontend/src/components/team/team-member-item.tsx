import "../../styles/team-member-item.css";

interface TeamMemberItemProps {
	image: string;
	name: string;
	role: string;
}

const TeamMemberItem = ({ image, name, role }: TeamMemberItemProps) => {
	return (
		<div className="team-member">
			<img src={image} alt={`${name}'s profile picture`} />
			<p>{name}</p>
			<p>{role}</p>
		</div>
	);
};

export { TeamMemberItem };
