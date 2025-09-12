export interface Member {
  name: string;
  imageUrl?: string;
  skills: string;
  contact: string[];
  description: string;
}

export type Team = readonly Member[];

export type Teams = Record<string, Team>;
