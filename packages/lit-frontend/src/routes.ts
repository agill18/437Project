import "/src/components/user-profile";
import "./views/blank-view";
import "./views/test-view";
import "./views/club-app";

export default [
  {
    path: "/app/profile",
    component: "user-profile",
    action: (event: any) => {
        console.log('Navigating to /app/profile', event);
        
    },
  },
  { path: "/app/home",
    component: "test-view",
    action: () => {
        console.log('Navigating to /app/home');
    },},
  { path: "/app",
    component: "blank-view",
    action: () => {
        console.log('Navigating to /app');
    },},
  { path: "(.*)", redirect: "/app" }
];