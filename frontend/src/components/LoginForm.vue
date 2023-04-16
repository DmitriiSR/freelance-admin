<template>
  <Transition name="fade">
    <div class="position-absolute position-center-center login-form" v-if="show">
      <h1 class="main-title">Вход в личный кабинет</h1>
      <form autocomplete="on">
        <TextInput :errors="errorFields" :name="'email'" :value="form.email" :label="'Email'" :type="'email'" class="login-email" @inputText="(v) => form.email = v"/>
        <TextInput :errors="errorFields" :name="'password'" :value="form.password" :label="'Пароль'" :type="'password'" class="login-password" @inputText="(v) => form.password = v"/>
      </form>
      <CustomBtn type="primary" text="Войти" class="form-btn" :enterPress="true" @clickEvent="login"/>
<!--      ToDo: сделать восстановление пароля -->
<!--      <router-link :to="ROUTE_PASSWORD_RECOVERY_PATH" class="pt-3 mx-auto">-->
<!--        Забыли логин или пароль?-->
<!--      </router-link>-->
      <div class="divider">или</div>
      <span>
        У вас ещё нет аккаунта?
        <router-link to="/registration">
          Зарегистрироваться
        </router-link>
      </span>
      <CustomLoader v-if="loading" class="position-absolute position-center-center"/>
    </div>
  </Transition>

</template>

<script setup lang="ts">
import TextInput from '@/components/UI/TextInput.vue'
import CustomBtn from '@/components/UI/CustomBtn.vue'
import CustomLoader from '@/components/UI/CustomLoader.vue'
import {ROUTE_MAIN_PATH, ROUTE_PASSWORD_RECOVERY_PATH} from "@/router/vars";
import {useFadeAppear} from "@/hooks";
import {Ref, ref} from "vue";
import { errorField, loginForm } from "@/components/types";
import axios, {AxiosResponse} from "axios";
import {LOGIN_URI} from "@/api/post";
import {useRouter} from "vue-router";

const router = useRouter();

const form: Ref<loginForm> = ref({
  email: '',
  password: ''
})
const loading = ref(false);
const errorFields: Ref<errorField[]> = ref([])

const show = useFadeAppear();
const validateLoginForm = (): boolean => {
  errorFields.value = [];
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  let field: keyof loginForm;
  for (field in form.value) {
    if (form.value[field] === '') {
      errorFields.value.push({name: field, message: 'Не заполнено поле'});
    }
  }

  if (errorFields.value.length) {
    return false
  }

  if (!EMAIL_REGEXP.test(form.value.email)) {
    errorFields.value.push({name: 'email', message: 'Некорректный email'});
    return false
  }

  return !errorFields.value.length;
}

const delay = (ms: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

const sendRequest = async (): Promise<AxiosResponse<{token: string}>> => {
  return await axios.post(LOGIN_URI, {...form.value});
}

let timeoutId: number | null;

const waitForAllPromises = async () => {
  const fetchPromise = sendRequest();
  const delayPromise = delay(400);

  await Promise.all([fetchPromise, delayPromise]);

  return await fetchPromise;
}

async function login() {
  if (!validateLoginForm()) return

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
.login-email {
  margin-top: 28px;
}
.login-password {
   margin-top: 17px;
 }

.form-btn {
  margin: 25px auto 0;
}

.divider {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #B4DADB;
  margin: 40px 0;

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #B4DADB;
  }

  &::before { margin-right: 7px }
  &::after { margin-left: 7px }
}

.login-form {
  width: 360px;
}
</style>
