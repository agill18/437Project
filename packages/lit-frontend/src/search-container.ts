import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SearchItemInterface } from './search-item-interface';

@customElement('search-container')
export class SearchContainer extends LitElement {
    @property({ reflect: true, type: Boolean }) searchTerm: string = "";

      render() {
        return html`
        <link rel="stylesheet" href="/styles/reset.css" />
        <link rel="stylesheet" href="/styles/page.css" />
        <link rel="stylesheet" href="/styles/tokens.css" />
        <input 
            type="search" 
            placeholder="Search Clubs..."
             @input=${this.handleSearch}
            .value=${this.searchTerm}
        />
        <slot> </slot>
        
        `;
    }

    static styles = css`
        :host {
            display: block;
            position: relative;
        }
    
        input[type="search"] {
            background-color: var(--color-light-background-accent);
            color: var(--color-text);
            font-size: var(--size-type-normal);
            padding: 0.35rem 0.5rem;
            border: transparent;
            border-radius: 5px;
            width: 
        }

        // input[type="search"]::-webkit-search-cancel-button {
        //     -webkit-appearance: none;
        // }

        input::placeholder {
            color: var(--color-text);
        }

        input:focus {
            outline: none;
            border: 2px solid var(--color-accent-light); /* Custom focus style */
            // box-shadow: 0 0 5px rgba(255, 165, 0, 0.5); /* Adding a glow effect */
        }
    `;

    handleSearch(ev: InputEvent) {
        // Case doesn't matter, setting to all lowercase to match data that is fetched from list elements
        this.searchTerm = (ev.target as HTMLInputElement).value.toLowerCase();
        console.log("Filtering for keyword(s):", this.searchTerm);
        this.filterItems(this.searchTerm);        
    }

    filterItems(searchTerms: string) : void {
        const searchKeys : Array<string> = searchTerms.split(" ");
        let matches: number = 0;
        const slots: NodeListOf<HTMLSlotElement> | undefined = this.shadowRoot?.querySelectorAll('slot');
        const slotElements: Element[] | null = slots && slots[0] ? slots[0].assignedElements({flatten: true}) : null;
        slotElements?.forEach(slot => {
            const filter: boolean = searchKeys.some(key => (slot as unknown as SearchItemInterface).getData().includes(key));
            filter ? matches += 1 : null;
            (slot as unknown as SearchItemInterface).setFilter(filter);
        }); 
        console.log("Found", matches, "matches");
    }
}