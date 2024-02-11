// src/user-profiles.ts
import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "./models/profile";
import { serverPath } from "./rest";
import  "./toggle-switch";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
  @property()
  path: string = "";

  @state()
  profile?: Profile;

  render() {
    return this.profile? html`
        <link rel="stylesheet" href="/styles/club-info.css" />
        <link rel="stylesheet" href="/styles/page.css" />
        <link rel="stylesheet" href="/styles/tokens.css" />
        <link rel="stylesheet" href="/styles/reset.css" />
        <dl>
            <dt class="subheading"> ${this.profile.name} </dt>
            <br>
            <toggle-switch> Dark Mode </toggle-switch>
            <br>
            <dt class="small-subheading"> Email </dt>
            <dd> ${this.profile.email} </dd>
            <br>
            <dt class="small-subheading"> Pronouns </dt>
            <dd> ${this.profile.pronouns} </dd>
            <br>
            <dt class="small-subheading"> Major </dt>
            <dd> ${this.profile.major} </dd>
            <br>
            <dt class="small-subheading"> Clubs </dt>
            <dd>
                <div class="tag">
                    ${this.profile.clubs}
                </div>
            </dd>
        </dl>
    ` : " ";
  }

  static styles = css`
    :host {
      display: block;
    }
  `;

  _fetchData(path: string) {
    fetch(serverPath(path))
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
          if (json) this.profile = json as Profile;
      });
  }

  connectedCallback() {
    if (this.path) {
      this._fetchData(this.path);
    }
    super.connectedCallback();
  }

  attributeChangedCallback(name: string, oldValue: string,newValue: string) {
    if (name === "path" && oldValue !== newValue && oldValue) {
      this._fetchData(newValue);
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }
}