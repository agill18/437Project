import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Club, Events } from "ts-models";
import * as App from "../app";
import "../components/app-header";
import "../components/club-item";


type EventLocation = Location & {
  params: { name: string };
};

@customElement("club-view")
export class ClubViewElement extends App.View {
  @property({ attribute: false })
  location?: EventLocation;

  @property({ reflect: true })
  get name() {
    return this.location?.params.name || '';
  }

  @property()
  get club() {
    return this.getFromModel("club") as Club;
  }

  @property()
  get events() {
    return this.getFromModel("events") as Events;
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "name" && oldValue !== newValue && newValue) {
      this.dispatchMessage({
          type: "GetEvents",
          host: newValue
      });
      this.dispatchMessage({
        type: "ClubSelected",
        name: newValue,
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
      <club-item .using=${this.club as Club} .usingEvents=${this.events}> </club-item>
    `;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}