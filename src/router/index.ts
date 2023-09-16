import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Compline from "@/views/Compline.vue";
import Empty from "@/views/Empty.vue";
import Settings from "@/views/Settings.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/compline",
  },
  {
    path: "/lauds",
    name: "lauds",
    component: () => import("../views/Empty.vue"),
    props: { title: "Lauds", section: "Hours" },
  },
  {
    path: "/prime",
    name: "prime",
    component: Empty,
    props: { title: "Prime", section: "Hours" },
  },
  {
    path: "/terce",
    name: "terce",
    component: () => import("../views/Empty.vue"),
    props: { title: "Terce", section: "Hours" },
  },
  {
    path: "/sext",
    name: "sext",
    component: () => import("../views/Empty.vue"),
    props: { title: "Sext", section: "Hours" },
  },
  {
    path: "/none",
    name: "none",
    component: () => import("../views/Empty.vue"),
    props: { title: "None", section: "Hours" },
  },
  {
    path: "/vespers",
    name: "vespers",
    component: () => import("@/views/Empty.vue"),
    props: { title: "Vespers", section: "Hours" },
  },
  {
    path: "/compline",
    name: "compline",
    component: Compline,
    props: { title: "Compline", section: "Hours" },
  },

  {
    path: "/settings",
    name: "settings",
    component: Settings,
    props: { title: "Settings", section: "Other" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
