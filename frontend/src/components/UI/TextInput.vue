<template>
  <div>
    <label class="custom-input" :class="{focus: focus, 'width-value': val, 'error': isError}">
      <input
          :type="type"
          @focus="click"
          @blur="blur"
          v-model="val"
          @input="input"
          :autocomplete="type === 'password'"
      >
      <span>{{ label }}</span>
    </label>
    <span v-if="isError" class="error-message">* {{errorMessage}}</span>
  </div>

</template>

<script setup lang="ts">
import {defineProps, ref, defineEmits, watchEffect} from "vue";
import {errorField} from "@/components/types";
import {computed, Ref} from "vue";

const props = defineProps<{
  label?:string
  type:string
  value?:string
  errors?: errorField[]
  name?:string
}>();

const errors: Ref<errorField[]> = ref([]);

watchEffect(() => {
  if (props?.errors?.length) {
    errors.value = [...props?.errors as errorField[]];
  }
})

const isError = computed(() => {
  return errors.value?.filter(e => e.name === props.name).length
})

const errorMessage = computed(() => {
  return errors.value?.filter(e => e.name === props.name)[0].message
})

const deleteError = () => {
  errors.value = [...errors.value?.filter(e => e.name !== props.name)];
}

const emit = defineEmits<{
  (e: "inputText", val: string): string
}>();

const focus = ref(false);
const val = ref(props.value);

const blur = () => {
  focus.value = false;
}
const click = () => focus.value = true;
const input = (e:Event) => {
  deleteError()
  emit('inputText', (e.target as HTMLInputElement).value)
}

</script>

<style lang="scss">

.custom-input {
  margin-top: 8px;
  position: relative;
  display: block;
  height: 44px;
  width: 100%;
  padding: 14px;
  border: 1px solid #476C76;
  border-radius: 5px;
  cursor: text;

  input {
    width: 100%;
    display: block;
    border: none;
    outline: none;
    color: #476C76;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    background-color: #ffffff;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-internal-autofill-selected {
    width: 100%;
    display: block;
    border: none;
    outline: none;
    color: #476C76!important;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    background-color: #ffffff!important;
    -webkit-text-fill-color: #476C76;
    -webkit-box-shadow: none;
    transition: none;
  }

  span {
    position: absolute;
    top: 14px;
    left: 10px;
    padding: 0 4px;
    background-color: #ffffff;
    color: #476C76;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    transition: ease all 0.12s;
  }

  &.width-value {
    border-color: #476C76;
    span {
      left: 0;
      top: -8px;
    }
  }

  &.focus {
    border-color: #3BCAE4;

    span {
      left: 0;
      top: -8px;
      color: #3BCAE4;
    }
  }

  &.error {
    border-color: #F24C00;

    span {
      color: #F24C00;
    }
  }

}

.error-message {
  width: 100%;
  display: block;
  text-align: left;
  font-size: 12px;
  color: #F24C00;
}
</style>
