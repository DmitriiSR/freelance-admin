<template>
  <div class="skeleton">
    <div class="skeleton__first">
      <div class="skeleton__animate" v-for="n in 2" :key="n"></div>
    </div>
    <div class="skeleton__second">
      <div class="skeleton__animate" v-for="n in 2" :key="n"></div>
    </div>
    <div class="skeleton__third"></div>
    <div class="skeleton__fourth">
      <div class="skeleton__animate" v-for="n in 3" :key="n"></div>
    </div>
    <div class="skeleton__fifth">
      <div class="skeleton__animate" v-for="n in 8" :key="n"></div>
    </div>
    <div class="skeleton__sixth" v-for="n in 14" :key="n">
      <div class="skeleton__animate" v-for="k in 8" :key="k"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.skeleton {

  &__first {
    display: flex;

    div {
      border-radius: 1px;
      height: 18px;
      background: #B4DADB;

      &:first-child {
        width: 67px;
        margin-right: 15px;
      }
      &:last-child { width: 18px; }
    }
  }

  &__second {
    display: flex;
    align-items: center;
    padding-top: 28px;
    padding-bottom: 24px;

    div {
      background: #B4DADB;

      &:first-child {
        width: 191px;
        height: 42px;
        margin-right: 30px;
        border-radius: 5px;
      }
      &:last-child {
        width: 120px;
        height: 15px;
      }
    }
  }

  &__third {
    width: 120px;
    height: 13px;
    border-radius: 1px;
    background: #B4DADB;
  }

  &__fourth {
    display: flex;
    padding-left: 17px;
    padding-top: 27px;

    div {
      background: #B4DADB;
      border-radius: 1px;
      margin-right: 37px;
      height: 18px;

      &:first-child { width: 79px; }
      &:nth-child(2) { width: 62px; }
      &:last-child { width: 87px; }
    }
  }

  &__fifth {
    display: flex;
    padding-top: 35px;

    div {
      background: #B4DADB;
      border-radius: 1px;
      margin-right: 10px;
      height: 42px;

      &:first-child { width: 35px; }
      &:nth-child(2) { width: 122px; }
      &:nth-child(3) { width: 183px; }
      &:nth-child(4) { width: 98px; }
      &:nth-child(5) { width: 139px; }
      &:nth-child(6) { width: 141px; }
      &:nth-child(7) { width: 123px; }
      &:last-child {
        width: 270px;
        margin-right: 0;
      }
    }
  }

  &__sixth {
    display: flex;
    padding-top: 5px;

    div {
      background: #B4DADB;
      border-radius: 1px;
      margin-right: 10px;
      height: 26px;

      &:first-child { width: 35px; }
      &:nth-child(2) { width: 122px; }
      &:nth-child(3) { width: 183px; }
      &:nth-child(4) { width: 98px; }
      &:nth-child(5) { width: 139px; }
      &:nth-child(6) { width: 141px; }
      &:nth-child(7) { width: 123px; }
      &:last-child {
        width: 270px;
        margin-right: 0;
      }
    }
  }

  &__animate {
    position: relative;
    overflow: hidden;

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, transparent, rgba(102, 180, 182, 0.7), transparent);
      opacity: 0.6;
      animation: run 1s linear infinite;
    }
  }

  @keyframes run {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
}
</style>
