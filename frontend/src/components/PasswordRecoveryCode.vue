<template>
  <Transition name="fade">
    <div v-if="show">
      <CustomBtn type="secondary-icon" text="" :enterPress="false" class="auth-back-btn" @clickEvent="back">
        <span></span>
      </CustomBtn>
      <div class="position-absolute position-center-center recovery-form">
        <h1 class="main-title">Запрос на восстановление пароля отправлен</h1>
        <p class="recovery-form__subtitle">Пожалуйста, введите код, который вы получили по электронной почте, чтобы подтвердить свою учётную запись и создать новый пароль.</p>
        <TextInput :label="'Введите код'" :type="'number'"/>
        <CustomBtn type="primary" text="Продолжить" class="mt-6 mx-auto" :enterPress="true" @clickEvent="confirmCode"/>
        <div class="divider"></div>
        <span class="d-block">Не пришёл код?</span>
        <span>
          <router-link to="#">
            Нажмите здесь
          </router-link>,
          чтобы повторно отправить код
        </span>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import {useFadeAppear} from "@/hooks";
import TextInput from '@/components/UI/TextInput.vue'
import CustomBtn from '@/components/UI/CustomBtn.vue'
import {useRouter} from "vue-router";
import {ROUTE_PASSWORD_RECOVERY_PATH, ROUTE_PASSWORD_NEW_PATH} from "@/router/vars";

const show = useFadeAppear();

const router = useRouter();

const confirmCode = () => {
  router.push({
    path: ROUTE_PASSWORD_NEW_PATH
  })
}

const back = () => {
  router.push({
    path: ROUTE_PASSWORD_RECOVERY_PATH
  })
}

</script>

<style scoped lang="scss">
.recovery-form {
  width: 360px;

  &__subtitle {
    padding: 15px 0 35px;
  }
}

.divider {
  height: 1px;
  background-color: #B4DADB;
  margin: 50px 0 25px;
}
</style>
