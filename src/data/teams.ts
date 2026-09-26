import membersSnapshot from "./members.generated.json";
import type { Teams } from "../types/team";

export const teams = membersSnapshot as Teams;

function toKebabCase(str: string) {
	return str.replace(/\s+/g, "-").toLowerCase();
}

export function getTeamMembers(teamName: string) {
	const team = teams[teamName];
	if (team) {
		return team;
	}

	const teamKey = Object.keys(teams).find(
		(key) => toKebabCase(key) === teamName
	);

	if (teamKey) {
		return teams[teamKey];
	}

	return undefined;
}

export function getMember(teamName: string, memberName: string) {
	const team = getTeamMembers(teamName);
	if (!team) {
		return undefined;
	}
	return team.find(
		(member) => member.name.toLowerCase() === memberName.toLowerCase()
	);
}
