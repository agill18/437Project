import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Profile } from "ts-models";
import { USER_EMAIL_KEY } from "../rest"
import * as App from "../app";
// import "../components/user-profile";
import "../components/user-profile-2";
import "../components/toggle-switch";
import "../components/custom-modal";
import "../components/search-container";
import "../components/app-header";

type ProfileLocation = Location & {
  params: { email: string };
};

@customElement("profile-view")
export class ProfileViewElement extends App.View {
  @property({ attribute: false })
  location?: ProfileLocation;

  @property({ reflect: true })
  get email() {
    return this.location?.params.email;
  }

  @property({ reflect: true })
  get edit(): boolean {
    if (this.location) {
      const params = new URL(document.location.toString()).searchParams;
      return params.has("edit");
    }
    return false;
  }

  @property()
  get profile() {
    return this.getFromModel("profile") as Profile;
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "email" && oldValue !== newValue && newValue) {
      console.log("Profile Page:", newValue);
      this.dispatchMessage({
        type: "ProfileSelected",
        email: newValue
      });
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  shouldRenderEditProfile() {
    if (this.profile && this.profile.email && localStorage.getItem(USER_EMAIL_KEY) === this.profile.email) {
      return true;
    }
    return false;
  }

  renderPersonalProfileView() {
    return html`
      <toggle-switch> Dark Mode </toggle-switch>
        <custom-modal customId="edit-user-profile">
            <span slot="button-name"> Edit Profile </span>
            <div slot="title"> Edit Profile </div>
            <div slot="content">
                <user-profile2-edit .using=${this.profile as Profile}> </user-profile2-edit>
            </div>
        </custom-modal>
    `;
  }
  render() {
    console.log('value of edit value', this.edit);
    return html`
      <link rel="stylesheet" href="/styles/club-info.css" />
      <link rel="stylesheet" href="/styles/page.css" />
      <link rel="stylesheet" href="/styles/tokens.css" />
      <link rel="stylesheet" href="/styles/reset.css" />
      <app-header> </app-header>
      <div class="page-content">
        <user-profile-2 .using=${this.profile as Profile}> </user-profile-2>
        ${this.shouldRenderEditProfile() ? this.renderPersonalProfileView() : ''}
      </div>
    `;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}