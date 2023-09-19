<template>
  <section v-if="canShowReview" :class="['card-review-container', `card-review-container--${cardLayout}`]">
    <div class="card-review-rating">
      <RatingCircles :count="rating" color="yellow" />
      <RatingCircles :count="5 - rating" color="gray" />
      <div v-if="canShowAuthor" class="card-review-rating__author"><span>|</span>{{ author }}</div>
    </div>
    <div v-if="canShowText" class="card-review-content">
      <p class="card-review-content__text">{{ reviewText }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CardLayout, CardRating, CardTheme, ECardLayout, ECardTheme } from '~~/types';
import { AtomsRatingCircles as RatingCircles } from '#components';
interface Props {
  cardLayout: CardLayout;
  rating: CardRating;
  reviewText: string;
  author: string;
  theme: CardTheme;
}

definePageMeta({
  name: 'CardReview',
  components: {
    RatingCircles,
  },
});

const props = withDefaults(defineProps<Props>(), {
  cardLayout: ECardLayout.VERTICAL,
  rating: 0,
  reviewText: '',
  author: '',
  theme: ECardTheme.DEFAULT,
});

const hasAuthor = computed(() => props.author.length > 0);
const canShowReview = computed(() => props.theme !== ECardTheme.REMOVE);
const canShowAuthor = computed(() => props.cardLayout === ECardLayout.HORIZON && hasAuthor.value);
const canShowText = computed(() => props.theme === ECardTheme.DEFAULT && props.cardLayout === ECardLayout.VERTICAL);
</script>

<style scoped lang="scss">
.card-review-container {
  &--horizon {
    padding: 0 20px 0;
  }
  &--vertical {
    position: relative;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    height: 75px;
  }
}
.card-review-container--vertical::before {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  border: 1px solid $systemBorderColor;
  border-top: 0px;
  width: 100%;
}
.card-review-rating {
  display: flex;
  @include font_2040;
  gap: 2px;
  align-items: center;
}
.card-review-rating__author {
  color: $systemLightGray;
  & > span {
    padding: 0 10px;
  }
}
.card-review-content {
  @include font_1440;
}
.card-review-content__text {
  @include textEllipsis(1);
}
</style>
