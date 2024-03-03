import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { consume } from "@lit/context";
import { APIUser, APIRequest } from "../rest";
import { authContext } from "./auth-container";
import { Profile } from "ts-models";
import "./drop-down";

@customElement("app-header")
export class AppHeaderElement extends LitElement {
  @state()
  profile?: Profile;

  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user = new APIUser();

  render() {
    return html`
        <link rel="stylesheet" href="/styles/club-info.css" />
        <link rel="stylesheet" href="/styles/page.css" />
        <link rel="stylesheet" href="/styles/tokens.css" />
        <link rel="stylesheet" href="/styles/reset.css" />
        <header>
            <a href="/app">
                <svg class="logo">
                    <use href="/icons/user-interface.svg#icon-logo" />
                </svg>
            </a>
            <h1 class="center-title"> 
                Cal Poly Clubs
            </h1>
            <drop-down>
                <svg class="header">
                    <use href="/icons/user-interface.svg#icon-profile" />
                </svg>
                <ul slot="menu">
                    <li>
                        <a href="/app"> Home </a>
                    </li>
                    <li> <hr> </li>
                    <li> 
                        <a href="/app/profile"> My Profile </a> 
                    </li>
                    <li> <hr> </li>
                    <li>
                        <a @click=${this._signOut}> Sign Out </a>
                    </li>
                </ul>
            </drop-down>
      </header>
    `;
  }

  static styles = css`
      a:hover {
        cursor: pointer;
      }
    `;


  updated(changedProperties: Map<string, unknown>) {
    console.log(
      "Profile Data has been updated",
      changedProperties
    );
    if (changedProperties.has("user")) {
      console.log("New user", this.user);
      const { username } = this.user;
      this._getData(`/profiles/${username}`);
    }
    return true;
  }

  _getData(path: string) {
    const request = new APIRequest();

    request
      .get(path)
      .then((response: Response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
        console.log("Profile:", json);
        this.profile = json as Profile;
      });
  }

  _signOut() {
    console.log("Signing out");
    this.user.signOut();
  }
}