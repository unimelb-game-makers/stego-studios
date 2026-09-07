import gamesSnapshot from "./games.generated.json";
import type { Game } from "../types/game";

export const games = gamesSnapshot as Game[];

export const getGameBySlug = (slug: string) =>
  games.find((game) => game.slug === slug);
