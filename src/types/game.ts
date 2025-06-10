import type { LinkProps } from "@tanstack/react-router";

export interface Game {
  linkProps: LinkProps;
  title: string;
  tags: string[];
  team: string;
  description: string;
  image: string;
}
