export interface EventDetail {
  _id: string;
  name: string;
  date: string;
  start_time: string;
  end_time: string;
  location: string;
  event_contact: string;
  host: string;
  description: string;
}

export interface Events {
  events: EventDetail[];
}