<template>
  <Transition name="fade">
    <div class="position-absolute position-center-center recovery-form" v-if="show">
      <h1 class="main-title">Пароль успешно изменён!</h1>
      <CustomBtn type="primary" text="Продолжить" class="mt-6 mx-auto" :enterPress="true" @clickEvent="toLogin"/>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import {useFadeAppear} from "@/hooks";
import CustomBtn from '@/components/UI/CustomBtn.vue'
import {useRouter} from "vue-router";
import {ROUTE_LOGIN_PATH} from "@/router/vars";

const show = useFadeAppear();

const router = useRouter();

const toLogin = () => {
  router.push({
    path: ROUTE_LOGIN_PATH
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
