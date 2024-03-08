import { html } from "lit";
import { Events, EventDetail } from "ts-models";

export function renderAllClubs(clubs: any) {
    if (clubs && Array.isArray(clubs)) {
        return clubs.map((club) => {
            return renderClub(club.name, club.description)
        });
    }
}

export function renderClub(name: string, description: string) {
    return html`
        <club-overview-card linkHref="/app/club/${name}">
            <span slot="club-name"> ${name} </span>
            <span slot="club-description"> ${description} </span>
        </club-overview-card>
    `;
}   

export function renderAllEvents(events: Events, host: string) {
    if (events && Array.isArray(events)) {
        return events.map((event) => {
            return renderEvent(event, host)
        });
    }
}

export function renderEvent(event: EventDetail, host: string) {
    const href: string = '/app/event/' + host + '/' + event._id;
    return html`
        <event-overview-card linkHref=${href}>
            <span slot="name"> ${event.name} </span>
            <span slot="date"> ${formatDate(event.date)} </span>
            <span slot="time"> ${getTime(event.start_time, event.end_time)} </span>
            <span slot="location"> ${event.location} </span>
        </event-overview-card>
    `;
}  

export function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

export function isNotEmpty(obj: any) {
    return Object.keys(obj).length !== 0;
  }

export function getTime(start_time: any, end_time: any) {
  const [hours, minutes] = end_time.split(":");
  const [hours_1, minutes_1] = start_time.split(":");

  const hours12 = hours % 12 || 12;
  const hours12_1 = hours_1 % 12 || 12;

  // Get the AM/PM indicator.
  const ampm = hours >= 12 ? "PM" : "AM";
  const ampm_1 = hours_1 >= 12 ? "PM" : "AM";

  // Return the time in 12-hour format with AM/PM indicator.
  if (ampm === ampm_1) {
    return `${hours12_1}:${minutes_1} - ${hours12}:${minutes} ${ampm} PST`;
  } else {
    // Return the time in 12-hour format with AM/PM indicator.
    return `${hours12_1}:${minutes_1} ${ampm_1} - ${hours12}:${minutes} ${ampm} PST`;
  }
}