import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("toggle-switch")
export class ToggleSwitchElement extends LitElement {
  @property({ reflect: true, type: Boolean }) 
  on: boolean = false;

  render() {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    return html`
        <label>
            <slot> Label </slot>
            <span class="slider">
                <input type="checkbox"
                @change=${this._handleChange}
                .checked=${isDarkMode}/>
            </span>
        </label>`;
  }

  static styles = css`
    :host {
      display: block;
    }

    label {
      display: flex;
      align-items: center;
      gap: 2rem;
      line-height: 2em;
    }

    .slider {
      display: inline-block;
      border-radius: 0.75em;
      background-color: var(--color-accent-inverted);
      height: 1.5em;
      width: 2.75em;
      position: relative;
      transition: background-color
      var(--time-transition-control-normal);
    }

    input {
      appearance: none;
      background-color: var(--color-text-heading);
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      vertical-align: center;
      position: relative;
      left: 0;
      transition: left var(--time-transition-control-normal);
    }

    input:checked {
      left: 1.5em;
    }

  `;

  _handleChange(ev: Event) {
        const target = ev.target as HTMLInputElement;
        this.on = target?.checked;
        console.log("Toggling Dark mode", ev);
        // In order to save dark-mode preference across different pages
        localStorage.setItem('dark-mode', String(this.on));
        document.body.classList.toggle('dark-mode', this.on);
    }
}