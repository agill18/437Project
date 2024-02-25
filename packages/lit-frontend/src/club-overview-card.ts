import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { SearchItemInterface } from './search-item-interface';


@customElement("club-overview-card")
export class ClubOverviewCard extends LitElement implements SearchItemInterface {
@property({ type: String }) linkHref: string = '../index.html';

  render() {
    return html`
        <link rel="stylesheet" href="/styles/reset.css" />
        <link rel="stylesheet" href="/styles/page.css" />
        <link rel="stylesheet" href="/styles/tokens.css" />
        <a href=${this.linkHref} class="club-card">
            <div>
                <h3> 
                    <slot name="club-name"> Default Club Name </slot>
                </h3>
                <div class="club-description">
                    <slot name="club-description"> Default Club Description </slot>
                </div>
            </div>
      </a>
    `;
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
    }

    .club-card {
        font-weight: var(--font-weight-normal);
        display: block;
        border-radius: 10px;
        background-color: var(--color-light-background-accent);
        display: flex;
        text-decoration: none;
        color: var(--color-accent);
        width: 60%;
        min-height: 6.6rem;
        margin: 1rem;
        padding-left: 1rem;
    }

    .club-card:hover {
        opacity: 0.9;
        color: var(--color-accent-light);
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.45);
        border-color: var(--color-accent);
        border-width: 0.5rem;
        fill: var(--color-accent-light);
    }

    .club-description {
        margin-top: 0rem;
        margin-bottom: 0.83rem;
        padding-right: 1rem;
        font-size: var(--size-type-small-body);
        overflow: auto;
    }
  `

  // Return: all lowercase String consisting of club name and club description
  getData(): string {
    let data = "";

    const slots: NodeListOf<HTMLSlotElement> | undefined = this.shadowRoot?.querySelectorAll('slot');
    slots?.forEach(slot => {
      const assignedNodes = slot.assignedNodes();
      // We only care about the text in the slot which is the very first item
      // Also transforming to lowercase for comparisons in search query where case should not matter
      data += assignedNodes[0].textContent?.toLowerCase().trim() + " "
    });

    return data;
  }

  // Hide items which have the filter turned off
  setFilter(filter: boolean): void {
    this.style.display = filter ? 'block' : 'none';
  }
}