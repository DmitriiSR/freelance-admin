<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import {ROUTE_REGISTRATION_PATH, ROUTE_LOGIN_PATH} from "@/router/vars";

declare global {
  interface Window {
    auth:boolean;
  }
}

const isAuth = localStorage.getItem('jwtToken');
const router = useRouter();
const route = window.location.pathname;

if (!isAuth && route !== ROUTE_LOGIN_PATH && route !== ROUTE_REGISTRATION_PATH) {
  router.push({
    path: ROUTE_LOGIN_PATH
  })
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
