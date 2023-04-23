<template>
<header class="header">
  <div class="header__inner">
    <a href="/" class="header__logo"></a>
    <div class="header__user">
      <i class="bi bi-person"></i>
    </div>
  </div>
</header>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  background: #FEFCFD;
  box-shadow: 0 0 35px #E7EEF0;

  &__inner {
    max-width: 1180px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: block;
    width: 202px;
    height: 18px;
    background-image: url("../assets/img/logo_dark.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 202px;
    background-color: transparent;
  }

  &__user {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background-color: #B4DADB;
    border-radius: 50%;

    i {
      font-size: 16px;
      color: #476C76;
    }
  }
}
</style>
