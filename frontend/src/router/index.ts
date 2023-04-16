import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainPage from "@/views/MainPage.vue";
import AuthPage from "@/views/AuthPage.vue";
import * as vars from './vars'

const routes: Array<RouteRecordRaw> = [
  {
    path: vars.ROUTE_MAIN_PATH,
    component: MainPage,
  },
  {
    path: vars.ROUTE_LOGIN_PATH,
    component: AuthPage,
  },
  {
    path: vars.ROUTE_REGISTRATION_PATH,
    component: AuthPage,
  },
  {
    path: vars.ROUTE_CONFIRM_REGISTRATION_PATH,
    component: AuthPage,
  },
  {
    path: vars.ROUTE_PASSWORD_RECOVERY_PATH,
    component: AuthPage,
  },
  {
    path: vars.ROUTE_PASSWORD_RECOVERY_CODE_PATH,
    component: AuthPage,
  },
  {
    path: vars.ROUTE_PASSWORD_NEW_PATH,
    component: AuthPage,
  },
  {
    path: vars.ROUTE_PASSWORD_RECOVERY_SUCCESS_PATH,
    component: AuthPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
