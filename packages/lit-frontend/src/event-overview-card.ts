import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("event-overview-card")
export class EventOverviewCard extends LitElement {
@property({ type: String }) linkHref: String = '/index.html';

  render() {
    return html`
        <link rel="stylesheet" href="/styles/reset.css" />
        <link rel="stylesheet" href="/styles/page.css" />
        <link rel="stylesheet" href="/styles/tokens.css" />
        <a href=${this.linkHref} class="event-card">
          <div class="event-name"> 
            <slot name="name"> Default Event Name </slot>
          </div>
          <hr class="line-seperater">
          <div class="event-info">
              <svg class="icon">
                  <use href="/icons/user-interface.svg#icon-calendar" />
              </svg>
              <slot name="date"> Default Event Name </slot>
              <svg class="icon">
                  <use href="/icons/user-interface.svg#icon-clock" />
              </svg>
              <slot name="time"> Default Time </slot>
              <svg class="icon">
                  <use href="/icons/user-interface.svg#icon-location" />
              </svg>
              <slot name="location"> Default Location </slot>
          </div>
      </a>
      `;
  }

  static styles = css`
    .event-card {
      display: inline-block;
      font-size: var(--size-type-normal-body);
      border-radius: 0.8rem;
      background-color: var(--color-light-background-accent);
      width: 15.5rem;
      height: 15rem;
      color: var(--color-accent);
      overflow: auto;
      margin: 0.5rem;
      margin-right: 1rem;
      margin-left: 0rem;
      text-decoration: none;
      font-weight: var(--font-weight-normal);
      padding: 0.5rem;
    }

    .event-card:hover {
      opacity: 0.9;
      color: var(--color-accent-light);
      box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.45);
      border-color: var(--color-accent);
      border-width: 0.5rem;
      fill: var(--color-accent-light);
    }

    .event-info {
      display: grid;
      grid-template-columns: max-content max-content;
      gap: 0 0.7rem;
      row-gap: 0.4rem;
      padding-bottom: 0.01rem;
    }

    .event-name {
      font-weight: var(--font-weight-extra-bold);
      margin-top: 1rem;
      margin-bottom: 1rem;
      text-align: center;
    } 

    .line-seperater {
      margin-top: 2rem;
      margin-bottom: 2rem;
      color: var(--color-accent);
    }
  `
}