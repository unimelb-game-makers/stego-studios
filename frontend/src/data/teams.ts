import type { Teams } from "../types/team";

export const teams = {
  "Team Rocket": [
    {
      name: "Iden",
      skills: "Programming, Web development",
      contact: ["idennnn@gmail.com", "idenmcelhone.dev"],
      description: "I am so cool for making these schemas amirite",
    },
    {
      name: "Han",
      skills: "Dancing, Singing",
      contact: ["hanissocool@gmail.com"],
      description: "Han is so cool for using these datatypes for testing",
    },
    {
      name: "Alex",
      skills: "Development, Not jobless",
      contact: ["alexissocool@gmail.com"],
      description: "Uses neovim (I think)",
    },
    {
      name: "Ethan",
      skills: "very cool",
      contact: ["ethanissocool@gmail.com"],
      description: "A random name I'm running out of ideas",
    },
    {
      name: "Olivia",
      skills: "very cool",
      contact: ["oliviaissocool@gmail.com"],
      description: "(2) A random name I'm running out of ideas",
    },
    {
      name: "Oliver",
      skills: "very cool",
      contact: ["oliverissocool@gmail.com"],
      description: "(3) A random name I'm running out of ideas",
    },
    {
      name: "Pascal",
      skills: "very cool",
      contact: ["pascalissocool@gmail.com"],
      description: "(4) A random name I'm running out of ideas",
    },
  ],
  "Team Magma": [
    {
      name: "Jun",
      skills: "Leadership, Technical Director specialist",
      contact: ["junissocool@gmail.com", "junyyeo.dev"],
      description: "The best technical director ever",
    },
    {
      name: "Iden",
      skills: "Drinking water, eating food",
      contact: ["idenissocool@gmail.com"],
      description: "Testing for duplicate names in different teams",
    },
  ],
  "Team Aqua": [
    {
      name: "Antartica",
      skills: "Cold, Empty",
      contact: ["antarticaissocold@gmail.com"],
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
    },
    {
      name: "Olivia",
      skills: "very cool",
      contact: ["oliviaissocool@gmail.com"],
      description: "Duplicate test no.2",
    },
    {
      name: "Jun",
      skills: "Leadership, Technical Director specialist",
      contact: ["junissocool@gmail.com", "junyyeo.dev"],
      description: "Duplicate test no.3",
    },
  ],
} as const satisfies Teams;

export type TeamName = keyof typeof teams;
export type MemberName<T extends TeamName> = (typeof teams)[T][number]["name"];

export function getTeamMembers(teamName: TeamName) {
  return teams[teamName];
}

export function getMember<T extends TeamName>(
  teamName: T,
  memberName: MemberName<T>,
) {
  const team = getTeamMembers(teamName);
  return team.find((member) => member.name === memberName);
}
