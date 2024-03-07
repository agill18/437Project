export interface ClubSummary {
  name: string;
  description: string;
}

export interface ClubSummaries {
  clubs: ClubSummary[];
}

export interface Club {
  name: string,
  description: string, 
  contact: string,
  days: string, 
  start_time: string,
  end_time: string, 
  location: string,
  tags: string[]
  events: Event[];
}