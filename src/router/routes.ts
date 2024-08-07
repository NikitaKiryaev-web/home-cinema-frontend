import { RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "Home",
    path: "/",
    component: Home
  }
];

export default routes;
