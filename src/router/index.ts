import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "index",
    path: "/",
    component: () => import("@/views/Index.vue"),
    children: [
      {
        name: "home",
        path: "/home",
        alias: "/",
        component: () => import("@/views/Home.vue"),
        meta: {
          require_auth: false,
          title: "Home",
        },
      },
      {
        name: "orders",
        path: "/orders",
        component: () => import("@/views/Orders.vue"),
        meta: {
          require_auth: false,
          title: "Orders",
        },
      },
    ],
  },
];

export const router: any = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to: any, _from: any) => {
  let title = "Home";
  if (to.meta.title) {
    title = to.meta.title;
  }

  if (to.meta.require_auth) {
    if (!localStorage.getItem("token")) {
      return { name: "login", query: { redirect: to.fullPath } };
    }
  }

  document.title = title;
});
