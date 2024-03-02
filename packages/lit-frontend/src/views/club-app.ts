import { html, css } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";
import routes from "../routes";
import update from "../update";
import "../components/auth-container";
import "../components/auth-primary";
import "../components/vaadin-router";
import "/src/components/user-profile";
import "./blank-view";

@customElement("club-app")
export class ClubAppElement extends App.Main {
  constructor() {
    super(update);
  }

  render() {
    return html`
      <auth-primary>
        <vaadin-router .routes=${routes}> </vaadin-router>
      </auth-primary>
    `;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}