import { createRouter, createWebHistory } from "vue-router";
import MainPageView from "../views/MainPageView.vue";
import MenuView from "../views/MenuView.vue";
import OurStoryView from "../views/OurStoryView.vue";
import ContactsView from "../views/ContactsView.vue";
import CartView from "../views/CartView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPageView,
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuView,
    children: [
      {
        path: "",
        name: "redirect-wrapper",
        redirect: "/menu/ramen",
      },
      {
        path: "ramen",
        component: MenuView,
      },
      {
        path: "soup",
        component: MenuView,
      },
      {
        path: "salad",
        component: MenuView,
      },
      {
        path: "rice",
        component: MenuView,
      },
    ],
  },
  {
    path: "/our-story",
    name: "OurStory",
    component: OurStoryView,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: ContactsView,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
