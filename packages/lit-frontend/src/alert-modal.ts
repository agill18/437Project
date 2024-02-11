import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('alert-modal')
export class AlertModal extends LitElement {
    @state()
    alertVisible: Profile = true;

    render() {
        return html`
            <div class="alert">
                <span class="closebtn" @click=${this.closeAlert}> &times; </span>
                <slot name="message"> Default Message </slot>
            </div>
        `;
    }

    static styles = css`
        :host {
            display: block;
            margin: 0px;
            position: relative;

        }
        
        .alert {
            z-index: 1002; /* Will cause this to pop over other elements */
            padding: 1rem;
            font-weight: var(--font-weight-extra-bold);
            color: white;
            font-size: var(--size-type-small-heading);
            bottom: 1rem; /* To make alert pop up at the bottom of the screen */
            position: relative;
            background-color:#6f7a5f;
            position: fixed;
            width: 80%;
        }

        .closebtn {
            margin-left: 15px;
            color: white;
            font-weight: bold;
            float: right;
            font-size: 22px;
            line-height: 20px;
            cursor: pointer;
            transition: 0.3s;
        }

        .closebtn:hover {
            color: black;
        }
    `;

    connectedCallback() {
        super.connectedCallback();
        this.autoHideAlert();

    }

    autoHideAlert() {
        // Hide the alert after 6 seconds if it has not been closed already
        setTimeout(() => {
        if (this.alertVisible) {
            this.closeAlert();
        }
        }, 6000);
    }

    closeAlert() {
        this.alertVisible = false;
        this.style.display = 'none';
        this.requestUpdate();
    }
}