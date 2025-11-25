import type { LinkProps } from "@tanstack/react-router";

interface GameGifData {
  title: string;
  description: string;
}

interface Game {
  linkProps: LinkProps;
  title: string;
  tags: string[];
  team: string;
  gameDescription: string;
  gifFeature: GameGifData;
  gifDescription: GameGifData;
  gifStory: GameGifData;
  image: string;
  presskitUrl?: string;
}

export { type Game }
