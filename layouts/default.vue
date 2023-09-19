<template>
  <div>
    <TheHeader />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { CommonTheHeader as TheHeader } from '#components';
definePageMeta({
  components: {
    TheHeader,
  },
});
</script>

<style scoped>
div {
  height: 100vh;
}
</style>
