import type { Teams } from "../types/team";

export const teams = {
  "Team Rocket": [
    {
      name: "Iden",
      role: "Developer",
      skills: ["Programming", "Web development"],
      contact: [
        { type: "email", content: "idennnn@gmail.com" },
        { type: "personal", content: "idenmcelhone.dev" },
      ],
      description: "I am so cool for making these schemas amirite",
      personalNote: "hello hello hello testing 1 2 3 4 5 6 7 8",
    },
    {
      name: "Han",
      role: "Team Member",
      skills: ["Dancing", "Singing"],
      contact: [{ type: "email", content: "hanissocool@gmail.com" }],
      description: "Han is so cool for using these datatypes for testing",
      personalNote: "",
    },
    {
      name: "Alex",
      role: "Team Member",
      skills: ["Development", "Not jobless"],
      contact: [{ type: "email", content: "alexissocool@gmail.com" }],
      description: "Uses neovim (I think)",
      personalNote: "",
    },
    {
      name: "Ethan",
      role: "Team Member",
      skills: ["very cool"],
      contact: [{ type: "email", content: "ethanissocool@gmail.com" }],
      description: "A random name I'm running out of ideas",
      personalNote: "",
    },
    {
      name: "Olivia",
      role: "Team Member",
      skills: ["very cool"],
      contact: [{ type: "email", content: "oliviaissocool@gmail.com" }],
      description: "(2) A random name I'm running out of ideas",
      personalNote: "",
    },
    {
      name: "Oliver",
      role: "Team Member",
      skills: ["very cool"],
      contact: [{ type: "email", content: "oliverissocool@gmail.com" }],
      description: "(3) A random name I'm running out of ideas",
      personalNote: "",
    },
    {
      name: "Pascal",
      role: "Team Member",
      skills: ["very cool"],
      contact: [{ type: "email", content: "pascalissocool@gmail.com" }],
      description: "(4) A random name I'm running out of ideas",
      personalNote: "",
    },
  ],
  "Team Magma": [
    {
      name: "Jun",
      role: "Technical Director",
      skills: ["Leadership", "Technical Director specialist"],
      contact: [
        { type: "email", content: "junissocool@gmail.com" },
        { type: "personal", content: "junyyeo.dev" },
      ],
      description: "The best technical director ever",
      personalNote: "",
    },
    {
      name: "Iden",
      role: "Team Member",
      skills: ["Drinking water", "eating food"],
      contact: [{ type: "email", content: "idenissocool@gmail.com" }],
      description: "Testing for duplicate names in different teams",
      personalNote: "",
    },
  ],
  "Team Aqua": [
    {
      name: "Antartica",
      role: "Team Member",
      skills: ["Cold", "Empty"],
      contact: [{ type: "email", content: "antarticaissocold@gmail.com" }],
      description: `This is a very very very very very 
                      long description on antartica for testing 
                      long descriptions. Antartica is very cold, 
                      and very empty. Antartica is not so warm, 
                      the human population is very low, santa 
                      claus included. Red hat, Red sweater, green
                      elves and cookies and milk. To make this a 
                      test for divs to contain these descriptions, 
                      we will probably put a word limit, but longer 
                      descriptions can still use overflow-y with a
                      scrollbar.`,
      personalNote: "",
    },
    {
      name: "Olivia",
      role: "Team Member",
      skills: ["very cool"],
      contact: [{ type: "email", content: "oliviaissocool@gmail.com" }],
      description: "Duplicate test no.2",
      personalNote: "",
    },
    {
      name: "Jun",
      role: "Team Member",
      skills: ["Leadership", "Technical Director specialist"],
      contact: [
        { type: "email", content: "junissocool@gmail.com" },
        { type: "personal", content: "junyyeo.dev" },
      ],
      description: "Duplicate test no.3",
      personalNote: "",
    },
  ],
} as const satisfies Teams;

export type TeamName = keyof typeof teams;
export type MemberName<T extends TeamName> = (typeof teams)[T][number]["name"];

function toKebabCase(str: string) {
  return str.replace(/\s+/g, "-").toLowerCase();
}

export function getTeamMembers(teamName: TeamName | string) {
  const team = teams[teamName as TeamName];
  if (team) {
    return team;
  }

  const teamKey = (Object.keys(teams) as TeamName[]).find(
    (key) => toKebabCase(key) === teamName,
  );

  if (teamKey) {
    return teams[teamKey];
  }

  return undefined;
}

export function getMember(
  teamName: string,
  memberName: string,
) {
  const team = getTeamMembers(teamName);
  if (!team) {
    return undefined;
  }
  return team.find((member) => member.name.toLowerCase() === memberName.toLowerCase());
}
