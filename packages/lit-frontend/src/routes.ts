import "/src/components/user-profile";
import "./views/blank-view";
import "./views/profile-view";
import "./views/club-app";
import "./views/home-view";
import "./views/club-view";
import "./views/event-view";
import { TOKEN_KEY } from './rest';

export default [
  {
    path: "/app/club/:name",
    component: "club-view",
    action: () => {
        console.log('Navigating to /app/club/:name'); 
    },
  },
  {
    path: "/app/profile/:email",
    component: "profile-view",
    action: () => {
        console.log('Navigating to /app/profile/:email'); 
    },
  },
  {
    path: "/app/event/:host/:_id",
    component: "event-view",
    action: () => {
        console.log('Navigating to /app/event/:host/:_id'); 
    },
  },
  { path: "/app",
    component: "home-view",
    action: (commands: any) => {
      // Conditional routing if we have a token or not
      console.log('Navigating to /app');
      if (localStorage.getItem(TOKEN_KEY)) {
          return 'home-view';
      } else {
        return commands.redirect('/');
      }
    },
  },
  { path: "/",
    component: "blank-view",
    action: () => {
        console.log('Navigating to /');
    },
  },
  { path: "(.*)", redirect: "/app" }
];