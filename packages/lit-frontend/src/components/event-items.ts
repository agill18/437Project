import {customElement, property } from "lit/decorators.js";
import { css, html } from "lit";
import { Events } from "ts-models";
import * as App from "../app";
import { renderAllEvents } from "../views/util.ts";

@customElement("event-items")
export class EventItemsElement extends App.View {
  @property({ attribute: false })
  using?: Events;

  get events() {
    return this.using || ({} as Events);
  }

  render() {
    return html`
        <div class="event-listing-homepage">
            ${renderAllEvents(this.events, 'General')}
        </div>
    `;
  }

  static styles = css`
        :host {
            display: contents
        }

        .event-listing-homepage {
            /* display: flex;
            flex-wrap: wrap; */
            padding-left: 1rem;
            display: flex;
            overflow-x: scroll;
            white-space: nowrap;
        }
    `;
}