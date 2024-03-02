import { css, html, LitElement } from "lit";
import { customElement } from 'lit/decorators.js';
import "./auth-container";

@customElement('auth-primary')
export class AuthPrimary extends LitElement {

    render() {
        return html`
        <div> 
            <auth-container> </auth-container>
            <slot> </slot>
        </div>
        `
    }

    static styles = css`
        :host {
            display: block;
        }
    `;
}
