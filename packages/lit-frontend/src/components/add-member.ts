import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Member, Profile } from "ts-models";
import * as App from "../app";
// import { USER_EMAIL_KEY } from "../rest";

@customElement("add-member")
export class AddMemberElement extends App.View {
  @property({ attribute: false })
  using?: Profile[];

  usingClub?: string;

  get profiles() {
    return this.using as Profile[];
  }

  get clubName() {
    return this.usingClub || "";
  }

  render() {
    return html`
      <link rel="stylesheet" href="/styles/page.css" />
      <link rel="stylesheet" href="/styles/tokens.css" />
      <link rel="stylesheet" href="/styles/reset.css" />
      <link rel="stylesheet" href="/styles/club-info.css" />
      <form 
        id="addEvent"
        @submit=${this._handleSubmit}
      >
          <div class="table-format">
            <label>
                <span class="with-icon"> Club Name
                    <svg class="lock-icon">
                        <use href="/icons/user-interface.svg#icon-lock" />
                    </svg>
                </span>
                <input class="disabled" disabled name="club_name" value=${this.clubName} type="text" required/>
            </label>
            <label> 
              <span> Select User </span>
              <select name="email" required>
                ${this.renderUserOptions(this.profiles)}
              </select>
            </label>
            <label> 
              <span> Role/Position </span>
              <input name="role" type="text" required/>
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
    </form>
    `;
  }

  renderUserOptions(profiles: Profile[]) {
    if (profiles && Array.isArray(profiles)) {
      return profiles.map((profile) => {
        return html`
          <option value=${profile.email || ""}> ${profile.email} </option>
        `
      });
    }
  }

  getNameForEmail(email: string, profiles: Profile[]) {
    return profiles.find(profile => profile.email === email)?.name;
  }

  static styles = css`
    .table-format {
      display: grid;
      grid-template-columns: max-content auto;
      gap: 2rem;
      align-items: center;
    }

    .disabled {
      opacity: 0.5;
    }

    input[type="date"] {
        color: var(--color-test);
    }

    input[type="time"]::-webkit-inner-spin-button {
        color: red;
    } 

    .larger-desc {
        height: 6rem;
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

    label {
      display: contents;
      font-weight: var(--font-weight-light-bold);
      outline: none;
    }

    h3 {
      margin-bottom: 1rem;
    }

    input, select, textarea {
      color-scheme: var(--color-scheme);
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
        width: 100%;
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

    .grid-container {
      display: grid;
      grid-template-columns: 2fr 1.5fr;
      column-gap: 1.5rem;
    }
  `;

   _handleSubmit(ev: Event) {
    ev.preventDefault(); // prevent browser from submitting form data itself

    const target = ev.target as HTMLFormElement;
    let formdata = new FormData(target);
    // Since diabled fields don't automatically can't included 
    formdata.append('club_name', this.clubName);
    let json = Object.fromEntries(formdata);
    const email = json.email.toString();
    formdata.append('name', this.getNameForEmail(email, this.profiles) as string);
    json = Object.fromEntries(formdata);

    console.log("Submitting Form", email, json);

    this.dispatchMessage({
        type: "MemberSaved",
        member: json as unknown as Member,
        club_name: this.clubName
    });
    
    // Close the modal after dispatching the save action and clear all previous form data
    target.reset();
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