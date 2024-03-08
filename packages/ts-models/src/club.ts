export interface ClubSummary {
  name: string;
  description: string;
}

export interface ClubSummaries {
  clubs: ClubSummary[];
}

export interface Club {
  name: string,
  detailed_description: string, 
  concise_description: string,
  owner: string,
  days: string, 
  start_time: string,
  end_time: string, 
  location: string,
  tags: string[]
}