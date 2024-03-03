import { css, html } from "lit";
import { ClubSummaries, ClubSummary } from "ts-models";
import { customElement, property } from "lit/decorators.js";
import * as App from "../app";
import "../components/club-overview-card";
import "../components/search-container";
import "../components/app-header";

@customElement("home-view")
export class HomeViewElement extends App.View {

    @property()
    get clubSummaries() {
        return this.getFromModel<ClubSummaries>("clubSummaries")
    }

    // attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    //     this.dispatchMessage({
    //         type: "GetClubSummaries",
    //     })
    //     super.attributeChangedCallback(name, oldValue, newValue);
    // }

    render() {
        return html`
            <link rel="stylesheet" href="/styles/page.css" />
            <link rel="stylesheet" href="/styles/tokens.css" />
            <link rel="stylesheet" href="/styles/reset.css" />
            <link rel="stylesheet" href="/styles/club-info.css" />
            <app-header> </app-header>
            <div class="page-content">
                <h2> Directory </h2>
                <search-container> 
                    ${this.renderAllClubs(this.clubSummaries)}
                </search-container>
            </div>
        `;
    }


    renderAllClubs(clubs: any) {
        if (clubs && Array.isArray(clubs)) {
            return clubs.map((club) => {
                return this.renderClub(club.name, club.description)
            });
        }
    }

    renderClub(name: string, description: string) {
        return html`
            <club-overview-card linkHref="/app/clubs/club-archery.html">
                <span slot="club-name"> ${name} </span>
                <span slot="club-description"> ${description} </span>
            </club-overview-card>
        `;
    }   

    firstUpdated() {
        this.dispatchMessage({
            type: "GetClubSummaries",
        })
        this.requestUpdate();
    }

    static styles = 
        css`
            :host {
                display: contents
            }
        `;
    
}