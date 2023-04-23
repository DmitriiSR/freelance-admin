<template>
  <Transition name="fade">
    <div class="position-absolute position-center-center registration-form__container" v-if="show">
      <div :class="{'with-opacity': loading}">
        <h1 class="main-title">Регистрация</h1>
        <form autocomplete="on" class="registration-form">
          <TextInput :errors="errorFields" :name="'full_name'" :label="'Имя'" :type="'text'" :value="form.email" @inputText="(v) => form.full_name = v" class="registration-form__item"/>
          <TextInput :errors="errorFields" :name="'email'" :label="'Email'" :type="'email'" @inputText="(v) => form.email = v" class="registration-form__item"/>
          <TextInput :errors="errorFields" :name="'password'" :label="'Пароль'" :type="'password'" @inputText="(v) => form.password = v" class="registration-form__item"/>
          <TextInput :errors="errorFields" :name="'repeat_password'" :label="'Повторите пароль'" :type="'password'" @inputText="(v) => form.repeat_password = v" class="registration-form__item"/>
        </form>
        <CustomBtn type="primary" text="Зарегистрироваться" class="form-btn" :enterPress="true" @clickEvent="register"/>
        <div class="divider">или</div>
        <span>
          У вас уже есть аккаунт?
          <router-link :to="ROUTE_LOGIN_PATH">
            Войти
          </router-link>
        </span>
        <CustomLoader v-if="loading" class="position-absolute position-center-center"/>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import TextInput from '@/components/UI/TextInput.vue'
import CustomBtn from '@/components/UI/CustomBtn.vue'
import CustomLoader from '@/components/UI/CustomLoader.vue'
import {useRouter} from "vue-router";
import {ROUTE_LOGIN_PATH, ROUTE_CONFIRM_REGISTRATION_PATH} from "@/router/vars";
import {useFadeAppear} from "@/hooks";
import {ref} from "vue";
import type { Ref } from 'vue'
import {registerForm, errorField} from "@/components/types";
import axios, {AxiosResponse} from "axios";
import {VALIDATE_REGISTRATION_URI} from "@/api/post";

const show = useFadeAppear()
const errorFields: Ref<errorField[]> = ref([])
const form: Ref<registerForm> = ref({
  full_name: '',
  email: '',
  password: '',
  repeat_password: ''
})

const router = useRouter();

const loading = ref(false);

const validateRegistrationForm = (): boolean => {
  errorFields.value = [];
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const PASSWORD_REGEXP = /^(?=.*\d)\w{8,20}$/m;

  let field: keyof registerForm;
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
  }

  if (!PASSWORD_REGEXP.test(form.value.password)) {
    errorFields.value.push({name: 'password', message: 'Пароль должен быть минимум 8 символов и содержать латинские буквы и цифры'});
    return false
  }

  if (form.value.password !== form.value.repeat_password) {
    errorFields.value.push({name: 'repeat_password', message: 'Не совпадают пароли'});
    return false
  }

  return !errorFields.value.length;
}

const delay = (ms: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

const sendRequest = async (): Promise<AxiosResponse<boolean>> => {
  return await axios.post(VALIDATE_REGISTRATION_URI, {...form.value});
}

let timeoutId: number | null;

const waitForAllPromises = async () => {
  const fetchPromise = sendRequest();
  const delayPromise = delay(400);

  await Promise.all([fetchPromise, delayPromise]);

  return await fetchPromise;
}

async function register() {
  if (!validateRegistrationForm()) return

  loading.value = true;
  if (timeoutId) clearTimeout(timeoutId);

  waitForAllPromises().then(() => {
    loading.value = false;
    router.push({
      path: ROUTE_CONFIRM_REGISTRATION_PATH
    })
  })
}
</script>

<style scoped lang="scss">
.registration-form {
  display: flex;
  flex-wrap: wrap;
  padding-top: 35px;

  &__item {
    width: 230px;
  }

  &__item:nth-child(odd) {
    margin-right: 20px;
  }

  &__item:nth-child(n+3) {
    margin-top: 25px;
  }

  &__container {
    width: 480px;
  }
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
  margin: 60px 0 25px;

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
</style>
