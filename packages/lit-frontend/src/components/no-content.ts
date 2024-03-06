import { css, html } from "lit";
import {customElement } from "lit/decorators.js";
import * as App from "../app";

@customElement("no-content")
export class NoContentElement extends App.View {

    render() {
        return html`
            <link rel="stylesheet" href="/styles/club-info.css" />
            <link rel="stylesheet" href="/styles/page.css" />
            <link rel="stylesheet" href="/styles/tokens.css" />
            <link rel="stylesheet" href="/styles/reset.css" />
            <div class="center">
                <div class="extra-large"> 
                    Uh Oh! 404 Error
                </div>
                <div class="slight-large"> 
                    The page you were looking for doesn't exist.
                </div>
                <!-- <div> -->
                    <svg class="large">
                        <use href="/icons/user-interface.svg#icon-404" />
                    </svg>
                <!-- </div> -->
                <div class="slight-large">
                    You might have typed in the wrong address.
                    <a href="/app" class="homepage">
                        Return to the home page.
                    </a>
                </div>
            </div>`;
    }

    static styles = css`
        :host {
            display: contents;
        }

        .large {
            margin-top: 4rem;
            margin-bottom: 2rem;
            width: 100%;
            height: 100%;
            fill: var(--color-text);
        }

        .center {
            color: var(--color-text);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .extra-large {
            margin-top: 4.5rem;
            font-size: 5rem;
            font-weight: var(--font-weight-extra-bold);
        }

        .slight-large {
            font-size: 2rem;
            font-weight: var(--font-weight-light);
        }

        .homepage {
            color: var(--color-link);
            text-decoration: underline;
            font-style: italic;
            margin: 0;
            font-size: 2rem;
            font-weight: var(--font-weight-extreme-bold);
        }
    `;
}