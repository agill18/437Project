import { css, html } from "lit";
import {customElement, property } from "lit/decorators.js";
import { ifDefined } from 'lit/directives/if-defined.js';
import { isNotEmpty } from "../views/util.ts"
import { Profile } from "ts-models";
import * as App from "../app";
import "./no-content";


const renderClub = (club: string) =>
  html`
    <div class="tag">
        ${club}
    </div>
  `;

@customElement("user-profile-2")
export class UserProfile2Element extends App.View {
  @property({ attribute: false })
  using?: Profile;

  get profile() {
    return this.using || ({} as Profile);
  }

render() {
    return this.profile && isNotEmpty(this.profile) ? html`
        <link rel="stylesheet" href="/styles/club-info.css" />
        <link rel="stylesheet" href="/styles/page.css" />
        <link rel="stylesheet" href="/styles/tokens.css" />
        <link rel="stylesheet" href="/styles/reset.css" />
        <dl>
            <dt class="subheading"> ${this.profile.name} </dt>
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
                ${this.profile.clubs?.map(renderClub)}
            </dd>
        </dl>
    ` : html`<no-content> </no-content>`;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}

@customElement("user-profile2-edit")
export class UserProfile2EditElement extends UserProfile2Element {

  render() {
    return this.profile? html`<form @submit=${this._handleSubmit}>
      <div class="table-format">
        <label>
          <span class="with-icon"> Name 
            <svg class="lock-icon">
                <use href="/icons/user-interface.svg#icon-lock" />
            </svg>
          </span>
          <input class='disabled' disabled name="name" value=${this.profile.name || ""} />
        </label>
        <label>
          <span class="with-icon"> Email 
            <svg class="lock-icon">
                <use href="/icons/user-interface.svg#icon-lock" />
            </svg>
          </span>
          <input class='disabled' name="email" disabled value=${this.profile.email || ""} />
        </label>
        <label>
          <span> Pronouns </span>
          <select name="pronouns">
            <option value=${ifDefined(this.profile.pronouns)}>${this.profile.pronouns}</option>
            <option value="She/her/hers">She/her/hers</option>
            <option value="He/him/his">He/him/his</option>
            <option value="They/them">They/them</option>
            <option value="Prefer not to share">Prefer not to share</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          <span> Major </span>
          <input name="major" value=${ifDefined(this.profile.major)} />
        </label>
        <label>
          <span class="with-icon"> Clubs 
            <svg class="lock-icon">
                <use href="/icons/user-interface.svg#icon-lock" />
            </svg>
          </span>
            <textarea class='disabled' disabled name="clubs" rows="3" cols="44" type="text">${ifDefined(this.profile.clubs?.join(", "))}</textarea>
        </label>
      </div>
      <div class="action-button-container">
          <button 
            type="submit"
            class="action-button confirm-button"> 
              Save
          </button>
          <button 
            type="button"
            class="action-button"
            @click=${this.closeModal}> 
              Cancel
          </button>
      </div>
    </form>` : html`<div> </div>`;
  }

  static styles = css`
    .table-format {
      display: grid;
      grid-template-columns: max-content auto;
      gap: 1.85rem;
      align-items: center;
    }

    label {
      display: contents;
      font-weight: var(--font-weight-light-bold);
      outline: none;
    }

    input, select, textarea {
      font-family: inherit;
      font-size: inherit;
      width: 100%;
      background-color: var(--color-background-page);
      color: var(--color-text);
      outline: none;
      border: 1.3px solid var(--color-accent);
      border-radius: 0.2rem;
      padding: 0.3rem;
    }

    .disabled {
      opacity: 0.5;
    }

    .with-icon {
      display: block;
    }

    svg.lock-icon {
        position: absolute;  
        display: inline-block;
        margin-left: 0.35rem;
        margin-top: 0.1rem;
        width: 1rem;
        height: 1.5rem;
        fill: var(--color-text);
    }

    select {
        width: 103%;
    }

    input:focus {
      border-color: var(--color-accent);
      box-shadow: none;
    }

    .action-button-container {
      margin-top: 2rem;
      bottom: 2rem;
      display: block;
      flex-direction: row;
      padding-left: 1rem;
      gap: 0.3rem;
    }

    .action-button {
        border-radius: 2rem;
        background-color: var(--color-modal-background);
        font-weight: var(--font-weight-light-bold);
        color: var(--color-text);
        border: 0.1rem solid var(--color-accent);
        font-size: var(--size-type-normal-body);
        padding: 0.6rem;
        cursor: pointer;
        margin-right: 0.2rem;
        margin-left: 0.2rem;
        float: right;
    }

    .action-button:hover {
        opacity: 0.9;
        color: var(--color-accent-light);
        border-color: var(--color-accent);
        fill: var(--color-accent-light);
    }

    .confirm-button {
        background-color: var(--color-background-header);
        color: var(--color-text-heading)
    }
    `;

  _handleSubmit(ev: Event) {
    ev.preventDefault(); // prevent browser from submitting form data itself

    const target = ev.target as HTMLFormElement;
    const formdata = new FormData(target);
    const entries = Array.from(formdata.entries())
      .map(([k, v]) => (v === "" ? [k] : [k, v]))
      .map(([k, v]) =>
        k === "clubs"
          ? [k, (v as string).split(",").map((s) => s.trim())]
          : [k, v]
      );
    const json = Object.fromEntries(entries);

    console.log("Submitting Form", json);

    this.dispatchMessage({
        type: "ProfileSaved",
        email: this.profile?.email || "",
        profile: json as Profile
    })

    // Close the modal after dispatching the save action
    this.closeModal();
  }

  closeModal() {
    this.dispatchEvent(new CustomEvent('call-modals-close-modal', {
      detail: { message: 'user wants to close edit user profile modal'},
      bubbles: true,
      composed: true
    }));
  }
}