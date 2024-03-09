import { css, html } from "lit";
import { ClubSummaries, Events } from "ts-models";
import { customElement, property } from "lit/decorators.js";
import * as App from "../app";
import "../components/club-overview-card";
import "../components/event-overview-card";
import "../components/search-container";
import "../components/event-form";
import "../components/club-form";
import "../components/event-items";
import "../components/app-header";
import "../components/custom-modal";
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
            <app-header> <div> Cal Poly Clubs </div> </app-header>
            <div class="page-content">
                <div> 
                    <div class="flex-container">
                        <h2> General Events/Announcements </h2>
                        <div> 
                            <custom-modal customId="add-event">
                                <span slot="button-name"> Add Event + </span>
                                <div slot="title"> Create Event </div>
                                <div slot="content">
                                    <event-form hostClub='General'> </event-form>
                                </div>
                            </custom-modal>
                        </div>
                    </div>
                    <div class="event-listing-homepage">
                        ${renderAllEvents(this.events, 'General')}
                    </div>
                </div>
                <div>
                    <div class="flex-container">
                        <h2> Directory </h2>
                        <div> 
                            <custom-modal customId="add-club">
                                <span slot="button-name"> Add Club + </span>
                                <div slot="title"> Register Club </div>
                                <div slot="content">
                                    <club-form> </club-form>
                                </div>
                            </custom-modal>
                        </div>
                    </div>
                    <div>
                        <search-container> 
                            ${renderAllClubs(this.clubSummaries)}
                        </search-container>
                    </div>
                </div>
            </div>
        `;
    }

    firstUpdated() {
        // Get all general clubs and events
        this.dispatchMessage({
            type: "GetClubSummaries",
        });
        this.dispatchMessage({
            type: "GetEvents",
            host: "General"
        });
    }

    attributeChangedCallback(name: string, oldValue: string,newValue: string) {
        console.log("attribute changed")
        if (name === "events" && oldValue !== newValue &&newValue) {
            console.log("attribute events changed")
            this.dispatchMessage({
                type: "GetEvents",
                host: "General"
            });
        }
        if (name === "clubSummaries" && oldValue !== newValue &&newValue) {
            console.log("attribute clubSummaries changed")
            this.dispatchMessage({
            type: "GetClubSummaries",
        });
        }
        super.attributeChangedCallback(name, oldValue, newValue);
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

        .flex-container {
            justify-content: space-between;
            display: flex;
        }
    `;
}