<template>
  <Transition name="fade">
    <main-header/>
  </Transition>
  <Transition name="fade">
    <main>
      <loader-skeleton v-if="loading"/>
    </main>
  </Transition>
</template>

<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import LoaderSkeleton from '@/components/LoaderSkeleton.vue'
import {onMounted, ref} from "vue";

const loading = ref(true);

onMounted(() => {
  setTimeout(() => loading.value = false, 1000)
})
</script>

<style>
main {
  max-width: 1180px;
  margin: 0 auto;
  padding-top: 20px;
}
</style>
