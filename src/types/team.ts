interface Contact {
  type: 'discord' | 'email' | 'linkedin' | 'personal'
  content: string
}

export interface Member {
<<<<<<< HEAD
  name: string;
  role: string;
  imageUrl?: string;
  skills: string[];
  contact: Contact[];
  description: string;
  personalNote: string;
=======
	name: string;
	imageUrl?: string;
	role: string;
	skills: string;
	contact: string[];
	description: string;
>>>>>>> 170c8ec (CHANGE: Made use of Iden's data + types in team page)
}


export type Team = readonly Member[];

export type Teams = Record<string, Team>;
