import { css, html } from "lit";
import { ClubSummaries, Events } from "ts-models";
import { customElement, property } from "lit/decorators.js";
import * as App from "../app";
import "../components/club-overview-card";
import "../components/event-overview-card";
import "../components/search-container";
import "../components/app-header";
import { renderAllClubs, renderAllEvents } from "./util.ts";

@customElement("home-view")
export class HomeViewElement extends App.View {

    @property()
    get clubSummaries() {
        return this.getFromModel<ClubSummaries>("clubSummaries")
    }

    @property()
    get events() {
        return this.getFromModel<Events>("events") as Events;
    }

    render() {
        return html`
            <link rel="stylesheet" href="/styles/page.css" />
            <link rel="stylesheet" href="/styles/tokens.css" />
            <link rel="stylesheet" href="/styles/reset.css" />
            <link rel="stylesheet" href="/styles/club-info.css" />
            <app-header> </app-header>
            <div class="page-content">
                <!-- <div class="split"> -->
                    <div> 
                        <h2> General Events/Announcements </h2>
                        <div class="event-listing-homepage">
                            ${renderAllEvents(this.events, 'general')}
                        </div>
                    </div>
                    <div>
                        <h2> Directory </h2>
                        <search-container> 
                            ${renderAllClubs(this.clubSummaries)}
                        </search-container>
                    </div>
                </div>
            <!-- </div> -->
        `;
    }

    firstUpdated() {
        // Get all general clubs and events
        this.dispatchMessage({
            type: "GetClubSummaries",
        });
        this.dispatchMessage({
            type: "GetEvents",
            host: "general"
        });;
    }

    static styles = css`
        :host {
            display: contents
        }

        .split {
            display: grid;
            grid-template-columns: 1fr 0.75fr;
            flex-direction: row;
        }

        .event-listing-homepage {
            /* display: flex;
            flex-wrap: wrap; */
            padding-left: 1rem;
            display: flex;
            overflow-x: scroll;
            white-space: nowrap;
        }

        ::-webkit-scrollbar {
            -webkit-appearance: none;
            height: 0.4rem;
        }

        ::-webkit-scrollbar-thumb {
            cursor: pointer;
            border-radius: 1rem;
            background-color: var(--color-text);
        }
    `;
}