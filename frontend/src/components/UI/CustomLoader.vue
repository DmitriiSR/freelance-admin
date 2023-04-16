<template>
  <div class="loader">
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    <span>Пожалуйста, подождите</span>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.loader {
  width: 256px;
  height: 130px;
  background: #FEFCFD;
  border-radius: 5px;
  padding: 22px 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20;
  filter: drop-shadow(0px 0px 35px #A5C9CA);

  span {
    margin-top: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 54px;
  height: 54px;
  margin: 8px;
  border: 5px solid #476C76;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #476C76 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
