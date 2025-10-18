interface Contact {
  type: 'discord' | 'email' | 'linkedin' | 'personal'
  content: string
}

export interface Member {
  name: string;
  role: string;
  imageUrl?: string;
  skills: string[];
  contact: Contact[];
  description: string;
  personalNote: string;
}


export type Team = readonly Member[];

export type Teams = Record<string, Team>;
