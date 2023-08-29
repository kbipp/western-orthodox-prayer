import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Compline from "@/views/Compline.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/compline",
  },
  {
    path: "/lauds",
    name: "lauds",
    component: () => import("../views/Empty.vue"),
    props: true,
  },
  {
    path: "/prime",
    name: "prime",
    component: () => import("../views/Empty.vue"),
    props: true,
  },
  {
    path: "/terce",
    name: "terce",
    component: () => import("../views/Empty.vue"),
    props: true,
  },
  {
    path: "/sext",
    name: "sext",
    component: () => import("../views/Empty.vue"),
    props: true,
  },
  {
    path: "/none",
    name: "none",
    component: () => import("../views/Empty.vue"),
    props: true,
  },
  {
    path: "/vespers",
    name: "vespers",
    component: () => import("@/views/Empty.vue"),
    props: true,
  },
  {
    path: "/compline",
    name: "compline",
    component: Compline,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
