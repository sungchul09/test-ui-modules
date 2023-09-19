<template>
  <div :class="`card-review-rating ${props.color}`">
    <template v-for="(n, ratingCircleIndex) of props.count" :key="`rating-circle-${ratingCircleIndex}`">
      <p class="circle">⏺</p>
    </template>
  </div>
</template>

<script setup lang="ts">
interface Props {
  count: number;
  color: string;
}

definePageMeta({
  name: 'RatingCircles',
});

const props = withDefaults(defineProps<Props>(), {
  count: 0,
  color: 'gray',
});
</script>

<style scoped lang="scss">
.card-review-rating {
  display: flex;
  gap: 2px;
}
.circle {
  @include font_3060;
  line-height: 1;
}
.yellow {
  color: $systemYellow;
}
.gray {
  color: $systemBorderColor;
}
</style>
