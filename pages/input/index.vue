<template>
  <div class="input-page">
    <div class="input-page-case">
      <p class="input-page-title">default</p>
      <TheInput placeholder="default 예시입니다." :disabled="false" :readonly="false" max-length="500" />
    </div>
    <div class="input-page-case">
      <p class="input-page-title">disabled</p>
      <TheInput placeholder="disabled 예시입니다." :disabled="true" :readonly="false" max-length="500" />
    </div>
    <div class="input-page-case">
      <p class="input-page-title">readonly</p>
      <TheInput placeholder="readonly 예시입니다." :disabled="false" :readonly="true" max-length="500" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { OrganismsTheInput as TheInput } from '#components';
definePageMeta({
  layout: 'default',
  components: {
    TheInput,
  },
});
</script>

<style scoped lang="scss">
.input-page {
  padding: 0px 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-page-case {
  width: 100%;
}
.input-page-title {
  @include font_2070;
}
</style>
