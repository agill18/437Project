import { consume, createContext, provide } from "@lit/context";
import { property, state } from "lit/decorators.js";
import * as MVU from "./mvu";
import { MsgType } from "./mvu";
import { AuthenticatedUser, APIUser } from "./rest";
import { Profile, ClubSummary, EventDetail, Club } from "ts-models";

export interface Model {
  user: APIUser;
  profile?: Profile;
  clubSummaries?: ClubSummary[];
  events?: EventDetail[];
  event?: EventDetail;
  club?: Club;
}

export const context = createContext<Model>("ClubModel");

export const init: Model = {
  user: new APIUser(),
};

export interface UserLoggedIn extends MsgType<"UserLoggedIn"> {
  user: AuthenticatedUser;
}

export interface ProfileSelected extends MsgType<"ProfileSelected"> {
  email: string;
}

export interface ProfileSaved extends MsgType<"ProfileSaved"> {
  email: string;
  profile: Profile;
}

export interface GetClubSummaries extends MsgType<"GetClubSummaries"> {
}

export interface CreateClub extends MsgType<"CreateClub"> {
  club: Club;
}

export interface GetEvents extends MsgType<"GetEvents"> {
  host: string;
}

export interface CreateEvent extends MsgType<"CreateEvent"> {
  event: EventDetail;
  host: string;
}

export interface EventSelected extends MsgType<"EventSelected"> {
  _id: string;
  host: string;
}

export interface ClubSelected extends MsgType<"ClubSelected"> {
  name: string;
}

export type Message =
  | UserLoggedIn
  | ProfileSaved
  | ProfileSelected
  | GetClubSummaries
  | GetEvents
  | CreateEvent 
  | EventSelected 
  | ClubSelected
  | CreateClub;

export class Main extends MVU.Main<Model, Message> implements MVU.App<Model, Message> {
  @provide({ context })
  @state()
  model = init;

  constructor(update: MVU.Update<Model, Message>) {
    super(update, () => this.model, (next: Model) => (this.model = next));
  }
}

export class View extends MVU.View<Message> {
  @consume({ context: context, subscribe: true })
  @property({ attribute: false })
  _model: Model | undefined;

  getFromModel<T>(key: keyof Model) {
    this.requestUpdate()
    if (this._model) {
      return this._model[key] as T;
    }
  }
}

export const createDispatch = () =>
  new MVU.Dispatch<Model, Message>();

export const updateProps = MVU.updateProps<Model>;
export const noUpdate = MVU.noUpdate<Model>;