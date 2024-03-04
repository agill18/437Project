import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { consume } from "@lit/context";
import { APIUser, USER_EMAIL_KEY } from "../rest";
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
                        <a href="/app/profile/${localStorage.getItem(USER_EMAIL_KEY)}"> My Profile </a> 
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

  _signOut() {
    console.log("Signing out");
    this.user.signOut();
  }
}