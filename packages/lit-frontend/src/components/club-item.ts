import { css, html } from "lit";
import {customElement, property } from "lit/decorators.js";
import { isNotEmpty, getTime } from "../views/util.ts"
import { Club } from "ts-models";
import * as App from "../app.ts";
import "./no-content.ts"

@customElement("club-item")
export class ClubItemElement extends App.View {
  @property({ attribute: false })
  using?: Club;

  get club() {
    return this.using as Club;
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
            <div class="subheading"> Additional Info </div>
            <div class="additional-info-containter">
                <div class="info-subheading"> Meeting: </div>
                  <table class="meeting-table">
                    <tr>
                        <td> <div class="meeting-table-subheading"> Day(s): </div> </td>
                        <td> <div class="info-entry"> Tuesdays </div> </td>
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
            <dt class="subheading"> Upcoming Events </dt>
            <!-- <dd> 
                <div class="event-listing">
                    <event-overview-card linkHref="../events/event-archery.html">
                        <span slot="name"> General Meeting </span>
                        <span slot="date"> February 1, 2024 </span>
                        <span slot="time"> 3:00 PM - 4:00 PM PST </span>
                        <span slot="location"> Frank E. Pilling </span>
                    </event-overview-card>
                    <event-overview-card linkHref="../events/event-archery-2.html">
                        <span slot="name"> Archery Session </span>
                        <span slot="date"> February 26, 2024 </span>
                        <span slot="time"> 6:30 PM - 8:30 PM PST </span>
                        <span slot="location"> Central Coast Archery </span>
                    </event-overview-card>
                </div>
            </dd> -->
            <dt class="subheading"> Club Membership </dt>
            <!-- <dd>
                <p class="small-subheading"> Officers 
                    <div class="profile-listing"> 
                        <a href="../profiles/profile-Anna.html" class="officer-card"> 
                                <img class="profile-pic" src="../../images/a.webp">
                                <div class="role"> PRESIDENT </div>
                                Anna Reed
                        </a>
                        <a href="../profiles/profile-Clara.html" class="officer-card">
                            <img class="profile-pic" src="../../images/a.webp">
                            <div class="role"> TREASURER </div>
                            Clara Hallgarth
                        </a>
                    </div>
                </p>
                <p class="small-subheading"> Members 
                    <div class="member-count"> 2 total members </div>
                    <div class="profile-listing">
                        <a href="../profiles/profile-Anmol.html" class="member-card">
                            <img class="small-profile-pic" src="../../images/a.webp">
                            Anmol Gill
                        </a>
                        <a href="../profiles/profile-Annie.html" class="member-card">
                            <img class="small-profile-pic" src="../../images/a.webp">
                            Annie Wong
                        </a>
                    </div>
                </p>
            </dd> -->
          </dl>
      </div>
    ` : html`<no-content> </no-content>`;
  }

  renderTags(tags: string[]){
    return tags.map((tag) => {
      return html`
        <div class="tag"> ${tag} </div>
      `;
    })
  }

  renderTime(start_time: string, end_time: string) {
      if (start_time === "TBD")
      {
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
  `;
}