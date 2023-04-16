<template>
  <Transition name="fade">
    <div v-if="show" :class="{'with-opacity': loading}">
      <CustomBtn type="secondary-icon" text="" :enterPress="false" class="auth-back-btn" @clickEvent="back">
        <span></span>
      </CustomBtn>
      <div class="position-absolute position-center-center registration-confirm-form__container">
        <h1 class="main-title">Регистрация</h1>
        <p class="registration-confirm-form__subtitle">Чтобы подтвердить свою учётную запись, введите код, который был отправлен на вашу электронную почту.</p>
        <TextInput :value="code" @inputText="(v) => code = v" :name="'registration_code'" :label="'Код подтверждения'" :type="'text'"/>
        <CustomBtn type="primary" text="Зарегистрироваться" :enterPress="true" @clickEvent="confirmRegistration" class="mx-auto mt-5"/>
        <div class="divider"></div>
        <SendCode/>
      </div>
      <CustomLoader v-if="loading" class="position-absolute position-center-center"/>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import TextInput from '@/components/UI/TextInput.vue'
import CustomBtn from '@/components/UI/CustomBtn.vue'
import CustomLoader from '@/components/UI/CustomLoader.vue'
import SendCode from '@/components/SendCode.vue'
import { useFadeAppear } from "@/hooks";
import { useRouter } from "vue-router";
import { ROUTE_REGISTRATION_PATH, ROUTE_MAIN_PATH } from "@/router/vars";
import { ref } from "vue";
import axios, { AxiosResponse } from "axios";
import { CONFIRM_REGISTRATION_URI } from "@/api/post";

const show = useFadeAppear();

const router = useRouter();

const loading = ref(false)
const code = ref('');

const back = () => {
  router.push({
    path: ROUTE_REGISTRATION_PATH
  })
}

const delay = (ms: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

const sendRequest = async (): Promise<AxiosResponse<{token: string}>> => {
  return await axios.post(CONFIRM_REGISTRATION_URI, {code: code.value});
}

let timeoutId: number | null;

const waitForAllPromises = async () => {
  const fetchPromise = sendRequest();
  const delayPromise = delay(400);

  await Promise.all([fetchPromise, delayPromise]);

  return await fetchPromise;
}

async function confirmRegistration() {
  loading.value = true;
  if (timeoutId) clearTimeout(timeoutId);

  waitForAllPromises().then(res => {
    loading.value = false;
    localStorage.setItem('jwtToken', res.data.token);
    router.push({
      path: ROUTE_MAIN_PATH
    })
  })
}

</script>

<style scoped lang="scss">
.registration-confirm-form {

  &__container {
    width: 360px;
  }

  &__subtitle {
    padding: 15px 0 27px;
  }
}

.divider {
  height: 1px;
  background-color: #B4DADB;
  margin: 80px 0 25px;
}
</style>
