<template>
  <section :class="['card-info-container', `card-info-container--${cardLayout}`]">
    <div v-if="isVertical" class="card-info-label">{{ label }}</div>
    <div class="card-info-title">{{ title }}</div>
    <div :class="['card-info-description', `card-info-description--${cardLayout}`]">{{ description }}</div>
    <div v-if="isVertical" class="card-info-status">
      <div class="card-info-status__highlight">{{ highlight }}</div>
      <div class="card-info-status__cross-out">{{ crossOut }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CardLayout, ECardLayout } from '~~/types';

interface Props {
  cardLayout: CardLayout;
  label: string;
  title: string;
  description: string;
  highlight: string;
  crossOut: string;
}
definePageMeta({
  name: 'CardInfo',
});
const props = withDefaults(defineProps<Props>(), {
  cardLayout: ECardLayout.VERTICAL,
  label: '',
  title: '',
  description: '',
  highlight: '',
  crossOut: '',
});
const isVertical = computed(() => props.cardLayout === ECardLayout.VERTICAL);
</script>

<style scoped lang="scss">
.card-info-container {
  display: flex;
  flex-direction: column;
  &--horizon {
    padding: 20px;
  }
  &--vertical {
    padding: 20px;
  }
}
.card-info-label {
  color: $systemLightGray;
  @include font_1440;
}
.card-info-title {
  color: $black;
  @include font_1660;
  @include textEllipsis(1);
}
.card-info-description {
  @include font_1640;
  color: $systemDarkGray;
  margin: 10px 0;
  &--horizon {
    @include textEllipsis(3);
  }
  &--vertical {
    @include textEllipsis(2);
  }
}
.card-info-status {
  display: flex;
  align-items: baseline;
  gap: 15px;
}
.card-info-status__highlight {
  color: $systemRed;
  @include font_1440;
}
.card-info-status__cross-out {
  @include font_1240;
  color: $systemLightGray;
  text-decoration: line-through;
}
</style>
