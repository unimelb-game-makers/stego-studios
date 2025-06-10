import { type Game } from "../types/game";

export const theLastDiner: Game = {
  linkProps: { to: "/games/the-last-diner" },
  title: "The Last Diner",
  tags: ["Cooking", "Horror", "Roguelike"],
  team: "Team Rocket",
  description: `In this survival strength game, players must scavenge a ruined
  city for ingredients to cook an offering. They must avoid monsters
  while collecting ingredients.`,
  image: "/images/the-last-diner.png",
};

export const trackline: Game = {
  linkProps: { to: "/games/trackline" },
  title: "Trackline",
  tags: ["Rhythm", "Action", "Third Person"],
  team: "Team Magma",
  description: `A rhythm-based action game about a Walkman wielding rebel fighting
  their way out of the expansive urban underground by switching the
  tempo with their cassette tapes.`,
  image: "/images/trackline.png",
};

export const noellesArk: Game = {
  linkProps: { to: "/games/noelles-ark" },
  title: "Noelle's Ark",
  tags: ["Narrative", "RPG", "Adventure"],
  team: "Team Aqua",
  description: `You and your mythical creatures need a new place to live when
  your home island is swallowed up by a flood. You'll have to
  navigate the oceans and explore islands to escape this
  recession-defining housing crisis!`,
  image: "/images/noelles-ark.png",
};
