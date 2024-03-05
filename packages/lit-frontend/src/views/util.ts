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
        <club-overview-card linkHref="/app/clubs/club-archery.html">
            <span slot="club-name"> ${name} </span>
            <span slot="club-description"> ${description} </span>
        </club-overview-card>
    `;
}   

export function renderAllEvents(events: Events) {
    if (events && Array.isArray(events)) {
        return events.map((event) => {
            return renderEvent(event)
        });
    }
}

export function renderEvent(event: EventDetail) {
    return html`
        <event-overview-card linkHref="/app/events/event-career-fair.html">
            <span slot="name"> ${event.name} </span>
            <span slot="date"> ${formatDate(event.date)} </span>
            <span slot="time"> ${event.start_time} - ${event.end_time} </span>
            <span slot="location"> ${event.location} </span>
        </event-overview-card>
    `;
}  

export function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}