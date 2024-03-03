import "/src/components/user-profile";
import "./views/blank-view";
import "./views/test-view";
import "./views/club-app";
import "./views/home-view";

export default [
  {
    path: "/app/profile",
    component: "test-view",
    action: () => {
        console.log('Navigating to /app/profile'); 
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
  { path: "(.*)", redirect: "/" }
];