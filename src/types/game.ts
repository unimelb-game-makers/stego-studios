interface GameGifData {
  title: string;
  description: string;
}

interface Game {
  id: string;
  notionUrl: string;
  slug: string;
  title: string;
  tags: string[];
  team: string;
  gameDescription: string;
  gifFeature: GameGifData;
  gifDescription: GameGifData;
  gifStory: GameGifData;
  image: string;
  presskitUrl?: string;
  gameUrl?: string;
  platform?: string;
  status?: string;
  startDate?: string;
  releaseDate?: string;
  order: number;
}

export { type Game };
