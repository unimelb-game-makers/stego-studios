interface TeamMemberItemProps {
	image: string;
	name: string;
	role: string;
}

const TeamMemberItem = ({ image, name, role }: TeamMemberItemProps) => {
	return (
		<div>
			<p>{name}</p>
		</div>
	);
};

export { TeamMemberItem };
