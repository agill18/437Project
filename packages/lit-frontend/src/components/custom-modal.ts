import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";


@customElement("custom-modal")
export class CustomModal extends LitElement {
  constructor() {
    super();
    // Listen for child components wanting to close the modal
    this.addEventListener('call-modals-close-modal', this.closeModal);
  }

  @property({ type: String }) customId: string = 'id';

  render() {
    return html`
      <button 
        class="inverted-button"
        @click=${this.openModal}> 
          <slot name="button-name"> Default Action </slot>
      </button>
      <div class="overlay" id="${this.customId}-overlay">
        <div class="modal-content" id="${this.customId}-modal">
          <div class="modal-heading"> 
            <slot name="title"> Default Modal Title </slot>
            <button
              @click=${this.closeModal}
              class="x">
                x
            </button>
          </div>
          <hr class="divider">
          <slot name="content"> Default Modal Content </slot>
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: flex;
    }

    .divider {
      border: none; 
      border-radius: 1rem;
      height: 0.4rem; 
      background-color: var(--color-accent);
      margin-top: 1rem; 
      margin-bottom: 1.3rem;
      width: 100%;
    }

    .modal-heading {
      font-size: var(--size-type-large-heading);
      font-weight: var(--font-weight-extra-bold);
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .inverted-button {
      margin-top: 1rem;
      border-radius: 2rem;
      color: var(--color-text);
      font-weight: var(--font-weight-light-bold);
      border: 0.1rem solid var(--color-accent);
      font-size: var(--size-type-small-heading);
      padding: 0.5rem;
      background-color: var(--color-background-page);
      cursor: pointer;
    }

    .inverted-button:hover, .action-button:hover {
      opacity: 0.9;
      color: var(--color-accent-light);
      border-color: var(--color-accent);
      fill: var(--color-accent-light);
    }

    .x {
      float: right;
      font-size: var(--size-type-large-heading);
      color: grey;
      background: none;
      border-width: 0rem;
      border-radius: .5rem;
      cursor: pointer;
      align-items: center;
    }

    .x:hover {
      background: none;
      border-width: 0rem;
      background-color: rgba(0,0,0,0.15);
    }

    .modal-content {
      padding: 1.3rem;
      display: none; /* Hidden by default */
      background-color: var(--color-modal-background);
      position: absolute;
      border-radius: 2rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); 
      min-width: 25rem;
      height: max-content;
      justify-content: center;
      align-items: center;
      z-index: 1002; /* Will cause this to pop over all other elements */
      overflow: auto;
    }

    .overlay {
      display: none; /* Hidden by default */
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.75);
      z-index: 1001; /* Puts overlay above other items, but below modal */
    }
  `;

  openModal() {
      console.log("Opening modal:", this.customId);
      const modal = this.shadowRoot?.querySelector(`#${this.customId}-modal`) as HTMLElement;
      const overlay = this.shadowRoot?.querySelector(`#${this.customId}-overlay`) as HTMLElement;
      if (modal && overlay) {
        modal.style.display = 'block';
        overlay.style.display = 'block';
      }
  }

  closeModal() {
    console.log("Closing modal:", this.customId);
    const modal = this.shadowRoot?.querySelector(`#${this.customId}-modal`) as HTMLElement;;
    const overlay = this.shadowRoot?.querySelector(`#${this.customId}-overlay`) as HTMLElement;;
      if (modal && overlay) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
      }
  }
}