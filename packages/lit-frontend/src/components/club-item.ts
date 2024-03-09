import { css, html } from "lit";
import {customElement, property } from "lit/decorators.js";
import { isNotEmpty, getTime } from "../views/util.ts"
import { Club, Events, Members, Profile } from "ts-models";
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

render() {
    return this.club && isNotEmpty(this.club) ? html`
      <link rel="stylesheet" href="/styles/club-info.css" />
      <link rel="stylesheet" href="/styles/page.css" />
      <link rel="stylesheet" href="/styles/tokens.css" />
      <link rel="stylesheet" href="/styles/reset.css" />
      <app-header> <div> ${this.club.name} </div> </app-header>
      <div class="page-content">
        <div class="grid-container">
          <div class="flex-item-large">
            <div class="subheading"> About Us </div>
            <div class="club-description"> ${this.club.detailed_description} </div>
          </div>
          <div> </div>
          <div class="flex-item-small">
            <div class="flex-container">
              <div class="subheading"> Additional Info</div>
              ${this.hasAdminPermission() ? this.renderEditClubOption() : html``}
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
                    ${renderAllEvents(this.events, 'General')}
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
              <add-member .using=${this.profiles}> </add-member>>
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
                    <img class="profile-pic" src="../../images/a.webp">
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
                    <img class="small-profile-pic" src="../../images/a.webp">
                    ${member.name}
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

  static styles = css`
    :host {
      display: contents;
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
  `;
}