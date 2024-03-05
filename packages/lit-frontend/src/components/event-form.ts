import { css, html, LitElement } from "lit";
import {customElement, property } from "lit/decorators.js";

@customElement("event-form")
export class EventFormElement extends LitElement{

  render() {
    return html`
      <form 
        id="addEvent"
        @submit=${this._handleSubmit}
      >
        <div class="table-format">
            <label>
                <span> Name </span>
                <input name="name" type="text" required/>
            </label>
            <label>
                <span> Event Description </span>
                <textarea name="description" rows="4" cols="45" type="text" required> </textarea>
            </label>
            <label>
                <span> Location </span>
                <input name="location" type="text" required/>
            </label>
            <label>
                <span> Date </span>
                <input name="date" type="date" required/>
            </label>
            <label>
                <span> Start Time </span>
                <input name="start_time" type="time" required>
            </label>
            <label>
                <span> End Time </span>
                <input name="end_time" type="time" required>
            </label>
            <label>
                <span> Event Contact </span>
                <input name="event_contact" type="email" required>
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

  static styles = css`
    .table-format {
      display: grid;
      grid-template-columns: max-content auto;
      gap: 1.85rem;
      align-items: center;
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

    label {
      display: contents;
      font-weight: var(--font-weight-light-bold);
      outline: none;
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
        width: 104%;
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
    const json = Object.fromEntries(entries);

    console.log("Submitting Form", json);

//     this.dispatchMessage({
//         type: "ProfileSaved",
//         email: this.profile?.email,
//         profile: json as Profile
//     })

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