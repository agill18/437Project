import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("drop-down")
export class DropDownElement extends LitElement {
  @property({ reflect: true, type: Boolean }) open: boolean = false;

  render() {
    return html`
      <input
        type="checkbox"
        id="is-shown"
        @change=${this._handleChange}
        .checked=${this.open}
      />
      <label for="is-shown">
        <slot> Menu </slot>
      </label>
      <slot name="menu">
        <ul>
          <li> Command 1 </li>
          <li> Command 2 </li>
          <li> Command 3 </li>
        </ul>
      </slot>
    `;
  }

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    a {
      color: blue;
      text-decoration: none;
    }

    slot[name="menu"] {
      display: none;
      position: absolute;
      top: 100%;
      right: 0;
      border: 1px solid;
      background: var(--color-light-background-accent);
      border: purple;
      padding: 0.3rem;
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    /* CSS for slotted elements and default slot content */
    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
      margin: 0;
      padding: 0.25em;
      list-style: none;
      white-space: nowrap;
      color: var(--color-accent);
    }
  `;

  _handleChange(ev: InputEvent) {
    const target:  HTMLInputElement = ev.target as HTMLInputElement;
    this._toggle(target?.checked);
  }

  _toggle(open: boolean) {
    this.open = open;
    this._toggleClickAway(open);
  }

  _toggleClickAway(open: boolean) {
    const clickawayHandler = (ev: MouseEvent) => {
      if (!ev.composedPath().includes(this)) {
        this._toggle(false);
      } else {
        ev.stopPropagation();
      }
    };

    if (open) {
      document.addEventListener("click", clickawayHandler);
    } else {
      document.removeEventListener("click", clickawayHandler);
    }
  }
}