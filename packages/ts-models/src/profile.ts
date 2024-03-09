export interface Profile {
  userId?: string;
  name?: string;
  email?: string;
  pronouns?: string;
  major?: string;
  clubs?: string[];
}

export interface Member {
  name?: string; 
  email: string;
  club_name: string;
  role: string;
}

export interface Members {
  members: Member[];
}