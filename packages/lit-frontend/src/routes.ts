import "/src/components/user-profile";
import "./views/blank-view";
import "./views/profile-view";
import "./views/club-app";
import "./views/home-view";

export default [
  {
    path: "/app/profile/:email",
    component: "profile-view",
    action: () => {
        console.log('Navigating to /app/profile/:email'); 
    },
  },
  { path: "/app",
    component: "home-view",
    action: () => {
        console.log('Navigating to /app');
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