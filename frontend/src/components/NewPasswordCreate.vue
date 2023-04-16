<template>
  <Transition name="fade">
      <div class="position-absolute position-center-center recovery-form" v-if="show">
        <h1 class="main-title">Восстановление пароля</h1>
        <p class="recovery-form__subtitle">Пожалуйста, создайте новый пароль для вашей учётной записи</p>
        <div class="d-flex">
          <TextInput :label="'Новый пароль'" :type="'text'" style="margin-right: 20px"/>
          <TextInput :label="'Повторите пароль'" :type="'text'"/>
        </div>
        <CustomBtn type="primary" text="Завершить" class="mt-6 mx-auto" :enterPress="true" @clickEvent="endRecovery"/>
      </div>
  </Transition>
</template>

<script setup lang="ts">
import {useFadeAppear} from "@/hooks";
import TextInput from '@/components/UI/TextInput.vue'
import CustomBtn from '@/components/UI/CustomBtn.vue'
import {useRouter} from "vue-router";
import { ROUTE_PASSWORD_RECOVERY_SUCCESS_PATH } from "@/router/vars";

const show = useFadeAppear();

const router = useRouter();

const endRecovery = () => {
  router.push({
    path: ROUTE_PASSWORD_RECOVERY_SUCCESS_PATH
  })
}

</script>

<style scoped lang="scss">
.recovery-form {
  width: 480px;

  &__subtitle {
    padding: 15px 0 35px;
  }
}
</style>
