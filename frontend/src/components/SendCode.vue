<template>
  <div v-if="timeIsOver">
      <span class="d-block">Не пришёл код?</span>
      <span>
        <a href="" @click.prevent="setTimer">
          Нажмите здесь
        </a>,
          чтобы повторно отправить код
        </span>
  </div>
  <div v-else>
    <span>Повторно отправить код можно через: </span>
    <span class="fw-b">00:{{seconds < 10 ? `0${seconds}` : seconds}}</span>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";

const seconds = ref(59);

const timeIsOver = ref(false);

let interval:number;

const tickSecond = () => {
  if (seconds.value - 1) {
    seconds.value--
  } else {
    timeIsOver.value = true;
    clearInterval(interval);
  }
}

const setTimer = () => {
  seconds.value = 59;
  timeIsOver.value = false;
  interval = setInterval(tickSecond,950);
}

onMounted(() => {
  interval = setInterval(tickSecond,950);
})
</script>

<style lang="scss">

</style>
