import Vue from "vue";
import VueRouter from "vue-router";

// src/router/routes.js

import { createRouter, createWebHistory } from "vue-router";
import { getAuth } from "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/PageHome.vue") },
      { path: "camera", component: () => import("pages/PageCamera.vue") },
      {
        path: "users",
        component: () => import("pages/UsersPage.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "transacts",
        component: () => import("pages/TransactsPage.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "dashboard",
        component: () => import("pages/Dashboard.vue"),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/auth",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "login",
        component: () => import("pages/Login.vue"),
        meta: { requiresGuest: true },
      },
      {
        path: "signup",
        component: () => import("pages/Signup.vue"),
        meta: { requiresGuest: true },
      },
      {
        path: "profile",
        component: () => import("pages/UserProfile.vue"),
        meta: { requiresAuth: true },
      }, // Added UserProfile route
      // {
      //   path: "Echeck",
      //   component: () => import("pages/ViewCheckLayout.vue"),
      //   meta: { requiresAuth: true },
      // }, // Added UserProfile route
    ],
  },
  // Wildcard Route for 404 - Keep it last
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes, // make sure this is an array
});

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const auth = getAuth();
  const isAuthenticated = auth.currentUser;

  if (requiresAuth && !isAuthenticated) {
    // Redirect to the login page, modify this path based on your app's configuration
    next({ path: "/login" });
  } else {
    next(); // proceed to route
  }
});

export default routes;
