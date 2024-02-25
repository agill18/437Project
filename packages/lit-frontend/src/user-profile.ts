import { css, html, LitElement } from "lit";
import { ifDefined } from 'lit/directives/if-defined.js';
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "ts-models";
import { serverPath } from "./rest";
import  "./toggle-switch";
import "./custom-modal";
import "./alert-modal";

const renderClub = (club: string) =>
  html`
    <div class="tag">
        ${club}
    </div>
  `;

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

@customElement("user-profile-edit")
export class UserProfileEditElement extends UserProfileElement {
  @state()
  originalProfile?: Profile = this.profile;

  render() {
    return this.profile? html`<form @submit=${this._handleSubmit}>
      <div class="table-format">
        <label>
          <span> Name </span>
          <input name="name" value=${this.profile.name} />
        </label>
        <label>
          <span> Email </span>
          <input name="email" value=${this.profile.email} />
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
          <span> Clubs </span>
          <input name="clubs" value=${ifDefined(this.profile.clubs?.join(", "))} />
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

    input, select {
      width: 100%;
      background-color: var(--color-background-page);
      color: var(--color-text);
      outline: none;
      border: 1.3px solid var(--color-accent);
      border-radius: 0.2rem;
      padding: 0.3rem;
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

    this._putData(json as Profile);
  }

  _putData(json: Profile) {
    fetch(serverPath(this.path), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json)
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        else return null;
      })
      .then((json: unknown) => {
        if (json) {
          this.profile = json as Profile;
          console.log("Sucessfully updated profile")
          this.closeModal();
        }
      })
      .catch((err) =>
        console.log("Failed to PUT form data", err)
      );
  }

  closeModal() {
    this.dispatchEvent(new CustomEvent('call-modals-close-modal', {
      detail: { message: 'user wants to close edit user profile modal'},
      bubbles: true,
      composed: true
    }));
  }
}