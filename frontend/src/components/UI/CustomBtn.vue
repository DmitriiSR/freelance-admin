<template>
  <button class="btn" :class="className" @click.prevent.stop="click">
    <slot></slot>
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import {withDefaults, defineEmits, defineProps, computed, onMounted} from "vue";
import {BtnType} from "@/components/types";

const props = withDefaults(defineProps<{
  type: BtnType,
  text: string,
  enterPress: boolean
}>(), {
  enterPress: false,
  text: '',
})

const emit = defineEmits<{
  (e: "clickEvent"): string
}>();

const className = computed(() => {
  switch (props.type) {
    case 'primary':
      return 'btn-primary';
    case 'secondary-icon':
      return 'btn-secondary-icon'
    default:
      return ''
  }
})

const click = () => emit('clickEvent');

onMounted(() => {
  if (props.enterPress) {
    document.addEventListener('keyup', (e:KeyboardEvent) => {
      if (e.code === 'Enter') {
        click()
      }
    })
  }
})


</script>

<style scoped lang="scss">
.btn {
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  &.btn-primary {
    padding: 13px 27px;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #FEFCFD;
    background-color: #F24C00;
    border-radius: 5px;

    &:hover {
      background-color: #FF580C
    }

    &:active {
      background-color: #DF4600
    }
  }

  &.btn-secondary-icon {
    padding: 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #476C76;
    background-color: #B4DADB;
    border-radius: 5px;

    &:hover {
      background-color: #B4DADB
    }

    &:active {
      background-color: #B4DADB
    }
  }

}
</style>
