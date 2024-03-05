import { JSONRequest, APIRequest } from "./rest";
import * as App from "./app";
import { Profile, ClubSummary, EventDetail } from "ts-models";

const dispatch = App.createDispatch();
export default dispatch.update;

dispatch.addMessage("ProfileSaved", (msg: App.Message) => {
  const { email, profile } = msg as App.ProfileSaved;

  return new JSONRequest(profile)
    .put(`/profile/${email}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile:", json);
        return json as Profile;
      }
      return undefined;
    })
    .then((profile: Profile | undefined) =>
      profile ? App.updateProps({ profile }) : App.noUpdate
    );
});

dispatch.addMessage("UserLoggedIn", (msg: App.Message, model: App.Model) => {
    const { user } = msg as App.UserLoggedIn;
    console.log("Dispatched UserLoggedIn");

    return App.updateProps({ user })(model);
  }
);

dispatch.addMessage("ProfileSelected", (msg: App.Message) => {
  const { email } = msg as App.ProfileSelected;

  return new APIRequest()
    .get(`/profile/${email}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile:", json);
        return json as Profile;
      }
    })
    .then((profile: Profile | undefined) =>
      profile ? App.updateProps({ profile }) : App.noUpdate
    );
});

dispatch.addMessage("GetClubSummaries", (msg: App.Message) => {
  const {} = msg as App.GetClubSummaries;
  console.log("Dispatched GetClubSummaries");

  return new JSONRequest(undefined)
    .get(`/clubs`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("ClubSummaries:", json);
        return json as ClubSummary[];
      }
      return undefined;
    })
    .then((clubSummaries: ClubSummary[] | undefined) => 
      clubSummaries ? App.updateProps({ clubSummaries }) : App.noUpdate
    );
});


dispatch.addMessage("GetEvents", (msg: App.Message) => {
  const { host } = msg as App.GetEvents;
  console.log("Dispatched GetEvents");

  return new JSONRequest(undefined)
    .get(`/events/${host}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Events:", json);
        return json as EventDetail[];
      }
      return undefined;
    })
    .then((events: EventDetail[] | undefined) => 
      events ? App.updateProps({ events }) : App.noUpdate
    );
});