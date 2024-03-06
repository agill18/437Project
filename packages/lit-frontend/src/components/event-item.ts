import { css, html } from "lit";
import {customElement, property } from "lit/decorators.js";
import { isNotEmpty, formatDate } from "../views/util.ts"
import { EventDetail } from "ts-models";
import * as App from "../app";
import "./no-content"

@customElement("event-item")
export class EventItemElement extends App.View {
  @property({ attribute: false })
  using?: EventDetail;

  get event() {
    return this.using || ({} as EventDetail);
  }

render() {
    return this.event && isNotEmpty(this.event) ? html`
      <link rel="stylesheet" href="/styles/club-info.css" />
      <link rel="stylesheet" href="/styles/page.css" />
      <link rel="stylesheet" href="/styles/tokens.css" />
      <link rel="stylesheet" href="/styles/reset.css" />
        <div class="event-info-container">
            <div class="flex-item">
                <div class="event-name"> ${this.event.name} </div>
                <div class="event-description"> ${this.event.description} </div>
                <div class="event-info">
                    <svg class="icon">
                        <use href="/icons/user-interface.svg#icon-calendar" />
                    </svg>
                    <div>
                        <div class="small-subheading"> Date </div>
                        <div> ${formatDate(this.event.date)} </div>
                    </div>
                    <svg class="icon">
                        <use href="/icons/user-interface.svg#icon-clock" />
                    </svg>
                    <div>
                        <div class="small-subheading"> Time </div>
                        <div> ${this.event.start_time} - ${this.event.end_time} </div>
                    </div>
                    <svg class="icon">
                        <use href="/icons/user-interface.svg#icon-location" />
                    </svg>
                    <div>
                        <div class="small-subheading"> Location </div>
                        <div> ${this.event.location} </div>
                    </div>
                    <svg class="icon">
                        <use href="/icons/user-interface.svg#icon-email" />
                    </svg>
                    <div>
                        <div class="small-subheading"> Contact </div>
                        <div> ${this.event.event_contact} </div>
                    </div>
                </div>
            </div>
            <div class="flex-item">
            </div>
        </div>
    ` : html`<no-content> </no-content>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}