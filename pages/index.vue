<template>
  <div>
    <div>Index 페이지입니다.</div>
    <TheCard />
    <TheInput />
  </div>
</template>
<script setup lang="ts">
import { TheCard, TheInput } from '#components';
definePageMeta({
  layout: 'default',
  components: {
    TheCard,
    TheInput,
  },
});
</script>

<style lang="scss" scoped></style>
