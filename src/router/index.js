import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/crm",
      name: "crm",
      component: () => import("../views/Crm.vue"),
      children: [
        {
          path: "/usuarios",
          name: "usuarios",
          // component: () => import("../views/CrmClientes.vue"), // Este es el componente hijo
        },
        {
          path: "/compras",
          name: "compras",
          // component: () => import("../views/CrmClientes.vue"), // Este es el componente hijo
        },
        {
          path: "productos",
          name: "productos",
          component: () => import("../views/Productos.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
