<template>
  <div>
    CardComponent
    <div class="card">cardtest</div>
    <div class="card1">card1test</div>
    <div class="card2">card2test</div>
    <div class="card3">card3test</div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  name: 'CardComponent',
});
</script>

<style scoped lang="scss">
.card1 {
  @include font_1640;
}

.card2 {
  @include font_1660;
}

.card3 {
  @include font_1670;
}
</style>
