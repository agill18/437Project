import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { EventDetail } from "ts-models";
import * as App from "../app";
import "../components/app-header";
import "../components/event-item";


type EventLocation = Location & {
  params: { _id: string, host: string };
};

@customElement("event-view")
export class EventViewElement extends App.View {
  @property({ attribute: false })
  location?: EventLocation;

  @property({ reflect: true })
  get _id() {
    console.log("thiss the _id", this.location?.params._id);
    return this.location?.params._id || '';
  }

  @property({ reflect: true })
  get host() {
    console.log("thiss the host", this.location?.params.host);
    return this.location?.params.host || '';
  }

  @property()
  get event() {
    return this.getFromModel("event") as EventDetail;
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "_id" && oldValue !== newValue && newValue) {
      console.log("Event Page:", newValue);
      this.dispatchMessage({
        type: "EventSelected",
        _id: newValue,
        host: this.host
      });
    }
    else if (name === "host" && oldValue !== newValue && newValue) {
      console.log("Event Page:", newValue);
      this.dispatchMessage({
        type: "EventSelected",
        _id: this._id,
        host: newValue
      });
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  render() {
    return html`
      <link rel="stylesheet" href="/styles/club-info.css" />
      <link rel="stylesheet" href="/styles/page.css" />
      <link rel="stylesheet" href="/styles/tokens.css" />
      <link rel="stylesheet" href="/styles/reset.css" />
      <app-header> </app-header>
      <div class="page-content">
        <event-item .using=${this.event as EventDetail}> </event-item>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}