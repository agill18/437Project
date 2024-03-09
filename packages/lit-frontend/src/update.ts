import { JSONRequest, APIRequest } from "./rest";
import * as App from "./app";
import { Profile, ClubSummary, EventDetail, Club, Member } from "ts-models";

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

dispatch.addMessage("MemberSaved", (msg: App.Message) => {
  const { member, club_name } = msg as App.MemberSaved;

  return new JSONRequest(member)
    .post(`/members`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Member:", json);
        return json as Member;
      }
      return undefined;
    })
    .then(() => {
      return new JSONRequest(undefined)
        .get(`/members/${club_name}`)
        .then((response: Response) => {
          if (response.status === 200) {
            return response.json();
          }
          return undefined;
        })
        .then((json: unknown) => {
          if (json) {
            console.log("Members:", json);
            return json as Member[];
          }
          return undefined;
        })
        .then((members: Member[] | undefined) => 
          members ? App.updateProps({ members }) : App.noUpdate
        );
    });
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
    .get(`/clubSummaries`)
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

dispatch.addMessage("GetMembers", (msg: App.Message) => {
  const { club_name } = msg as App.GetMembers;
  console.log("Dispatched GetMembers");

  return new JSONRequest(undefined)
    .get(`/members/${club_name}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Members:", json);
        return json as Member[];
      }
      return undefined;
    })
    .then((members: Member[] | undefined) => 
      members ? App.updateProps({ members }) : App.noUpdate
    );
});

dispatch.addMessage("EventSelected", (msg: App.Message) => {
  const { _id, host } = msg as App.EventSelected;

  return new APIRequest()
    .get(`/events/${host}/${_id}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Event:", json);
        return json as EventDetail;
      }
    })
    .then((event: EventDetail | undefined) =>
      event ? App.updateProps({ event }) : App.noUpdate
    );
});

dispatch.addMessage("ClubSelected", (msg: App.Message) => {
  const { name } = msg as App.ClubSelected;

  return new APIRequest()
    .get(`/clubs/${name}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Club:", json);
        return json as Club;
      }
    })
    .then((club: Club | undefined) =>
      club ? App.updateProps({ club }) : App.noUpdate
    );
});

dispatch.addMessage("CreateEvent", (msg: App.Message) => {
  console.log("Dispatched CreateEvent");

  const { event, host } = msg as App.CreateEvent;

  return new JSONRequest(event)
    .post(`/events`)
    .then((response: Response) => {
      if (response.status === 201) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Event:", json);
        return json as EventDetail;
      }
    })
    .then(() => {
      // Refetch all events so information stays up to date 
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
    })
});

dispatch.addMessage("ClubSaved", (msg: App.Message) => {
  const { name, club } = msg as App.ClubSaved;

  return new JSONRequest(club)
    .put(`/clubs/${name}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Club:", json);
        return json as Club;
      }
      return undefined;
    })
    .then((club: Club | undefined) =>
      club ? App.updateProps({ club }) : App.noUpdate
    );
});

dispatch.addMessage("GetProfiles", () => {
  const email = "all";

  // "all" is passed into email if we want to fetch all profiles
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
        console.log("Profiles:", json);
        return json as Profile[];
      }
    })
    .then((profiles: Profile[] | undefined) =>
      profiles ? App.updateProps({ profiles }) : App.noUpdate
    );
});

dispatch.addMessage("CreateClub", (msg: App.Message) => {
  console.log("Dispatched CreateClub");

  const { club } = msg as App.CreateClub;

  return new JSONRequest(club)
    .post(`/clubs`)
    .then((response: Response) => {
      if (response.status === 201) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Club:", json);
        return json as Club;
      }
    })
    .then(() => {
      // Refetch all club summaries so information stays up to date 
      return new JSONRequest(undefined)
        .get(`/clubSummaries`)
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
    })
});