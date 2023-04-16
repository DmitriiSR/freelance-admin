<template>
  <div class="auth-template">
    <div class="auth-template__container">
      <a class="logo"></a>
      <div class="position-relative w-100 h-100">
        <Component :is="renderForm"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed } from "vue";
import {useRoute} from "vue-router";
import LoginForm from '@/components/LoginForm.vue';
import RegistrationForm from '@/components/RegistrationForm.vue'
import RegistrationConfirm from '@/components/RegistrationConfirm.vue'
import PasswordRecovery from '@/components/PasswordRecovery.vue'
import PasswordRecoveryCode from '@/components/PasswordRecoveryCode.vue'
import NewPasswordCreate from '@/components/NewPasswordCreate.vue'
import PasswordRecoverySuccess from '@/components/PasswordRecoverySuccess.vue'
import {ROUTE_LOGIN_PATH, ROUTE_REGISTRATION_PATH, ROUTE_CONFIRM_REGISTRATION_PATH, ROUTE_PASSWORD_RECOVERY_PATH, ROUTE_PASSWORD_RECOVERY_CODE_PATH, ROUTE_PASSWORD_NEW_PATH, ROUTE_PASSWORD_RECOVERY_SUCCESS_PATH} from "@/router/vars";

const route = useRoute();

const renderForm = computed(() => {
  switch (route.path) {
    case ROUTE_LOGIN_PATH:
      return LoginForm;
    case ROUTE_REGISTRATION_PATH:
      return RegistrationForm;
    case ROUTE_CONFIRM_REGISTRATION_PATH:
      return RegistrationConfirm;
    case ROUTE_PASSWORD_RECOVERY_PATH:
      return PasswordRecovery;
    case ROUTE_PASSWORD_RECOVERY_CODE_PATH:
      return PasswordRecoveryCode
    case ROUTE_PASSWORD_NEW_PATH:
      return NewPasswordCreate
    case ROUTE_PASSWORD_RECOVERY_SUCCESS_PATH:
      return PasswordRecoverySuccess
    default:
      return false
  }
})

</script>

<style lang="scss">

.auth-template {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__container {
    position: relative;
    width: 980px;
    height: 600px;
    background-color: #FEFCFD;
    background-image: url("../assets/img/auth_banner.jpg");
    background-repeat: no-repeat;
    background-size: 380px;
    background-position: left;
    border-radius: 15px;
    padding-left: 380px;

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: linear-gradient(2.49deg, #476C76 0.98%, rgba(242, 76, 0, 0.3) 39.7%, #A5C9CA 56.1%, rgba(71, 108, 118, 0.3) 96.87%);
      filter: blur(38.5px);
      border-radius: 15px;
    }
  }

}

.logo {
  position: absolute;
  left: 57px;
  top: 55px;
  display: block;
  width: 266px;
  height: 24px;
  background-image: url("../assets/img/logo.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.auth-back-btn {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 36px;
  height: 36px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: block;
    width: 8px;
    height: 12px;
    background-image: url("../assets/img/arr-back.svg");
    background-size: 8px;
    background-repeat: no-repeat;
    background-position: center;
  }
}

</style>
