import { RouteRecordRaw } from "vue-router";
import App from "../App.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "Home",
    path: "/",
    component: App
  }
];

export default routes;
