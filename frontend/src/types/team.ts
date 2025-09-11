export interface Member {
  name: string;
  imageUrl?: string;
  skills: string;
  contact: string[];
  description: string;
}

export interface Team {
  [memberName: string]: Member;
}

export interface Teams {
  [teamName: string]: Team;
}
