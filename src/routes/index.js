import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/Index.vue"),
  },
  {
    path: "/memberships",
    name: "Memberships",
    component: () => import("@/views/memberships/Index.vue"),
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("@/views/shop/Index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/auth/Login.vue"),
  },
  {
    path: "/chosememberships",
    name: "Chosememberships",
    component: () => import("../views/auth/userBegining/ChoseMemberships.vue"),
  },
  {
    path: "/infomemberships",
    name: "infoememberships",
    component: () => import("../views/auth/userBegining/InfoMemberships.vue"),
  },
  {
    path: "/selectacces",
    name: "selectAcces",
    component: () => import("../views/auth/userBegining/SelectAcces.vue"),
  },
  {
    path: "/validationotp",
    name: "validationotp",
    component: () => import("../views/auth/userBegining/ValidationOtp.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/auth/Register.vue"),
  },
  {
    path: "/contact",
    name: "Contact Us",
    component: () => import("@/views/contactUs/Index.vue"),
  },
  {
    path: "/programs",
    name: "Programs",
    component: () => import("@/views/programs/Index.vue"),
  },
 

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
