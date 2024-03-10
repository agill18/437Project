import { css, html } from "lit";
import {customElement, property } from "lit/decorators.js";
import { isNotEmpty, getTime } from "../views/util.ts"
import { Club, Events, Members, Profile, Member } from "ts-models";
import * as App from "../app.ts";
import { USER_EMAIL_KEY } from "../rest";
import { renderAllEvents } from "../views/util.ts"
import "./no-content.ts"
import "./club-edit.ts"
import "./add-member.ts"

@customElement("club-item")
export class ClubItemElement extends App.View {
  @property({ attribute: false })
  using?: Club;

  @property({ attribute: false })
  usingEvents?: Events;

  @property({ attribute: false })
  usingMembers?: Members;

  @property({ attribute: false })
  usingProfiles?: Profile[];

  @property({ attribute: false })
  usingMyProfile?: Profile;

  get club() {
    return this.using as Club;
  }

  get events() {
    return this.usingEvents as Events;
  }

  get members() {
    return this.usingMembers as Members;
  }

  get profiles() {
    return this.usingProfiles as Profile[];
  }

  get myProfile() {
    return this.usingMyProfile as Profile;
  }

render() {
    return this.club && isNotEmpty(this.club) ? html`
      <link rel="stylesheet" href="/styles/club-info.css" />
      <link rel="stylesheet" href="/styles/page.css" />
      <link rel="stylesheet" href="/styles/tokens.css" />
      <link rel="stylesheet" href="/styles/reset.css" />
      <app-header> <div> ${this.club.name} </div> </app-header>
      <div class="page-content">
        <!-- ${this.renderJoinOptions(this.myProfile, this.club, this.members)} -->
        <div class="grid-container">
          <div class="flex-item-large">
            <div class="subheading"> About Us </div>
            <div class="club-description"> ${this.club.detailed_description} </div>
          </div>
          <div> </div>
          <div class="flex-item-small">
            <div class="flex-container">
              <div class="subheading"> Additional Info</div>
              ${this.hasAdminPermission() ? this.renderEditClubOption() : this.renderJoinOptions(this.myProfile, this.club, this.members)}
            </div>
            <div class="additional-info-containter">
                <div class="info-subheading"> Meeting: </div>
                  <table class="meeting-table">
                    <tr>
                        <td> <div class="meeting-table-subheading"> Day(s): </div> </td>
                        <td> <div class="info-entry">${this.club.days}</div></td>
                    </tr>
                    <tr>
                        <td> <div class="meeting-table-subheading"> Time(s): </div> </td>
                        <td> <div class="info-entry"> ${this.renderTime(this.club.start_time, this.club.end_time)} </div> </td>
                    </tr>
                    <tr>
                        <td> <div class="meeting-table-subheading"> Locations(s): </div> </td>
                        <td> <div class="info-entry"> ${this.club.location} </div> </td>
                    </tr>
                  </table>
                <div class="info-subheading"> Tag(s): 
                    <div class="info-entry"> ${this.renderTags(this.club.tags)} </div>
                </div>
              </div>
          </div> 
        </div>
        <dl>
            <dt class="subheading"> Contact Information </dt>
            <dd> E: ${this.club.owner} </dd>
            <div class="flex-container">
              <h2> Upcoming Events </h2>
              <div> 
                ${this.hasAdminPermission() ? this.renderAddEventOption() : html``}
              </div>
            </div>
            <dd> 
                <div class="event-listing">
                    ${renderAllEvents(this.events, this.club.name)}
                </div>
            </dd>
            <div class="flex-container">
              <h2> Club Membership </h2>
              <div> 
                ${this.hasAdminPermission() ? this.renderAddOfficiersOption() : html``}
              </div>
            </div>
            <dd>
                <p class="small-subheading"> Officers 
                  <div class="profile-listing"> 
                      ${this.renderAdmin(this.members)}
                  </div>
                </p>
                <p class="small-subheading"> Members (${this.getMemberCount(this.members)})
                  <div class="profile-listing">
                      ${this.renderMembers(this.members)}
                  </div>
                </p>
            </dd>
          </dl>
      </div>
    ` : html`<no-content> </no-content>`;
  }

  renderJoinOptions(profile: Profile, club: Club, members: Members) {
    // President/owner doesn't have option to leave so no options to join or leave should be displayed
    if (profile && club.owner === profile.email) {
      return html``;
    }
    // If already a part of this club render unjoin button with join button disabled 
    if (profile && profile.clubs && this.isMember(members, profile)) {
      return html`
        <div>
          <button class='disabled-button' disabled> Join </button> 
          <button class='active-button' @click=${this.handleUnjoin}> Unjoin </button> 
        </div>
      `;
    } else {
      return html`
        <div>
          <button class='active-button' @click=${this.handleJoin}> Join </button> 
          <button class='disabled-button' disabled> Unjoin </button> 
        </div>
      `;
    }
  }

  isMember(members: Members, profile: Profile) {
    if (members && Array.isArray(members) && members.length !== 0) {
          return members.some(member => member.email === profile.email);
      }
  }

  handleJoin() {
    const member: Member = {name: this.myProfile.name, club_name: this.club.name, email: this.myProfile.email || "", role: "Member"}
    this.dispatchMessage({
        type: "MemberSaved",
        member: member as Member,
        club_name: this.club.name
    });
  }

  handleUnjoin() {
    this.dispatchMessage({
        type: "MemberDeleted",
        email: this.myProfile.email || "",
        club_name: this.club.name
    });
  }

  renderAddEventOption() {
    return html`
      <custom-modal customId="add-club">
        <span slot="button-name"> Add Event + </span>
        <div slot="title"> Add Event </div>
        <div slot="content">
            <event-form hostClub=${this.club.name}> </event-form>
        </div>
      </custom-modal>
      `
  }

  renderEditClubOption() {
    return html`
      <div> 
        <custom-modal customId="edit-club">
          <span slot="button-name"> Edit Club Info </span>
          <div slot="title"> Edit Club Info </div>
          <div slot="content">
              <club-edit .using=${this.club}> </club-edit>
          </div>
        </custom-modal>
      </div>
      `
  }

  renderAddOfficiersOption() {
    return html`
      <div> 
        <custom-modal customId="edit-club">
          <span slot="button-name"> Add Officers + </span>
          <div slot="title"> Add Officer </div>
          <div slot="content">
              <add-member .using=${this.profiles} .usingClub=${this.club.name}> </add-member>
          </div>
        </custom-modal>
      </div>
      `
  }
  
  hasAdminPermission() {
    return this.club.owner === localStorage.getItem(USER_EMAIL_KEY);
  }

  renderTags(tags: string[]){
    return tags.map((tag) => {
      return html`
        <div class="tag"> ${tag} </div>
      `;
    })
  }

  renderAdmin(members: Members) {
    if (members && Array.isArray(members)) {
        return members.map((member) => {
            if (member.role !== "Member")
             {
              return html`
                <a href="/app/profile/${member.email}" class="officer-card"> 
                    <div class="profile-pic">
                      <div class="circle">${this.getFirstLetter(member.name)}</div>
                    </div>
                    <div class="role"> ${member.role} </div>
                    ${member.name}
                </a>
              `
             }
            return html``;
        });
    }
  }

  renderMembers(members: Members) {
    if (members && Array.isArray(members)) {
        return members.map((member) => {
            if (member.role === "Member")
             {
              return html`
                <a href="/app/profile/${member.email}" class="member-card">
                  <div class="small-profile-pic">  
                    <div class="small-circle">${this.getFirstLetter(member.name)}</div>
                  </div>
                  <div class="space">
                    ${member.name}
                  </div>
                </a>
              `
             }
            return html``;
        });
    }
  }

  getMemberCount(members: Members) {
    let count = 0;
    if (members && Array.isArray(members)) {
        members.map((member) => {
          if (member.role === "Member")
            {
              count += 1;
            }
        });
    }
    return count;
  }

  renderTime(start_time: string, end_time: string) {
      if (start_time === "TBD") {
        return "TBD"
      }
      else {
        return getTime(start_time, end_time);
      }
  }

  getFirstLetter(name: string) {
    return name.charAt(0);
  }

  static styles = css`
    :host {
      display: contents;
    }

    .right {
      float: right;
    }

    .active-button {
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      background-color: var(--color-text);
      color: var(--color-text-heading);
      font-weight: var(--font-weight-light-bold);
      margin-right: 0.5rem;
    }

    .disabled-button {
      opacity: 0.5;
      padding: 0.5rem;
      border: none;
      background-color: var(--color-text);
      color: var(--color-text-heading);
      font-weight: var(--font-weight-light-bold);
      margin-right: 0.5rem;
    }

    .active-button:hover {
      opacity: 0.9;
      box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.45);
      border-color: var(--color-accent);
      border-width: 0.5rem;
      color: var(--color-text-heading);
    }

    .circle {
      margin-top: 1rem;
      border-radius: 20rem;
      font-size: 2.8rem;
      font-weight: var(--font-weight-extreme-bold);
      background-color: var(--color-background-page);
      padding-left: 1rem;
      padding-right: 1rem;
      color: var(--color-text);
    }

    .space {
      margin-top: 0.2rem;
    }

    .small-circle {
      border-radius: 20rem;
      font-size: 1rem;
      font-weight: var(--font-weight-light-bold);
      background-color: var(--color-background-page);
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
      padding-left: 0.6rem;
      padding-right: 0.6rem;
      color: var(--color-text);
    }

    .profile-pic {
      display: flex;
      justify-content: center;
    }

    .small-profile-pic {
      vertical-align: center;
      margin-right: 1.3rem;
    }

    .small-subheading {
        font-size: var(--size-type-small-heading);
        font-weight: var(--font-weight-light-bold);
        margin-bottom: 0rem;
    }

    .flex-container {
      justify-content: space-between;
      display: flex;
    }

    .event-listing {
        display: flex;
        flex-wrap: wrap;
        overflow-x: scroll;
        white-space: nowrap;
    }

    ::-webkit-scrollbar {
        -webkit-appearance: none;
        height: 0.4rem;
    }

    ::-webkit-scrollbar-thumb {
        cursor: pointer;
        border-radius: 1rem;
        background-color: var(--color-text);
    }
  `;
}