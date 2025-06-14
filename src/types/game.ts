import type { LinkProps } from "@tanstack/react-router";

interface Game {
  linkProps: LinkProps;
  title: string;
  tags: string[];
  team: string;
  description: string;
  image: string;
}

export { type Game }
