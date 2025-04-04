import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: false },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/crear-cuenta",
      name: "crearCuenta",
      component: () => import("../views/CrearCuenta.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/crm",
      name: "crm",
      meta: { requiresAuth: true },
      component: () => import("../views/Crm.vue"),
      children: [
        {
          path: "usuarios",
          name: "usuarios",
          meta: { requiresAuth: true },
          component: () => import("../views/Usuarios.vue"),
        },
        {
          path: "compras",
          name: "compras",
          meta: { requiresAuth: true },
          component: () => import("../views/Compras.vue"),
        },
        {
          path: "productos",
          name: "productos",
          meta: { requiresAuth: true },
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

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.name === "login" && authStore.isAuthenticated()) {
    next({ name: "home" });
  } else if (to.meta.requiresAuth && !authStore.isAuthenticated()) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
