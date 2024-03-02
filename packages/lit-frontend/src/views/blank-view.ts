import { customElement } from "lit/decorators.js";
import * as App from "../app";
import { html, css } from "lit";


@customElement("blank-view")
export class BlankViewElement extends App.View {

    render() {
        return html`
            <div> </div>
        `;
    }

    static styles = css`
        :host {
            display: contents;
        }
    `
}