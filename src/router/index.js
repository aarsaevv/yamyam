import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MenuView from "../views/MenuView.vue";
import OurStoryView from "../views/OurStoryView.vue";
import ContactsView from "../views/ContactsView.vue";
import CartView from "../views/CartView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/menu",
		name: "menu",
		component: MenuView,
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
	history: createWebHashHistory(),
	routes,
});

export default router;
