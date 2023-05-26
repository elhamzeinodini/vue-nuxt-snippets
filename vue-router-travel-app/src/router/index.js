import { createRouter, createWebHistory } from "vue-router";
import HomePage from "/src/views/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home.page",
  },
  {
    path: "/travel-app/:slug/:id",
    component: () => import("/src/views/DestinationShowPage.vue"),
    name: "destination.show",
    props: (route) => ({ id: parseInt(route.params.id) }),
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("/src/views/ExperienceShowPage.vue"),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound.page",
    component: () => import("/src/views/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(savedPosition) {
    // if you navigate between routes, you either go to the point you where before or you go back to top
    return savedPosition || { top: 0 };
  },
});

export default router;
