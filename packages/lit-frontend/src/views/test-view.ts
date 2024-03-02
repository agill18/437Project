import { customElement } from "lit/decorators.js";
import * as App from "../app";
import { html, css } from "lit";


@customElement("test-view")
export class TestViewElement extends App.View {

    render() {
        return html`
            <div> hi thereeej kdjfkal dsfjkladsfjlkadsf jlkasdjflkdfjladskfjlkdsa</div>
        `;
    }

    static styles = css`
        :host {
            display: contents;
        }
    `
}