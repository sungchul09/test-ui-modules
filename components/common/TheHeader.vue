<template>
  <header class="header">
    <h2 class="header-text">🎨 scyun 컴포넌트</h2>
    <div class="header-menu">
      <nuxt-link :to="{ name: 'card' }">card 컴포넌트</nuxt-link>
      <nuxt-link :to="{ name: 'input' }">input 컴포넌트</nuxt-link>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  @include font_2060;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 40px;
  gap: 20px;
  position: relative;
  margin-bottom: 50px;
}
.header::after {
  position: absolute;
  content: '';
  border: 1px solid $systemBorderColor;
  width: 100%;
  border-top: 0px;
  left: 0;
  bottom: 0;
}
.header-menu {
  @include font_2060;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  & > a {
    &:visited {
      color: inherit;
    }
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
