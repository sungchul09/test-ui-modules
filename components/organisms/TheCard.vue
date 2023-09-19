<template>
  <div :class="['card', `card--${cardLayout}`]">
    <div class="card-thumbnail">
      <CardThumbnail
        :class="`card-thumbnail--${cardLayout}`"
        :card-layout="cardLayout"
        :img-src="IMAGE_SRC"
        :default-src="DEFAULT_SRC"
      />
    </div>
    <div :class="['card-content', `card-content--${cardLayout}`]">
      <CardInfo
        :card-layout="cardLayout"
        :label="cardData.label"
        :title="cardData.title"
        :description="cardData.description"
        :highlight="cardData.highlight"
        :cross-out="cardData.crossOut"
      />
      <CardReview
        :theme="theme"
        :card-layout="cardLayout"
        :rating="cardData.rating"
        :review-text="cardData.reviewText"
        :author="cardData.author"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { IMAGE_SRC, DEFAULT_SRC } from '~~/static/variable';
import { useCardStore } from '~~/stores';
import {
  MoleculesCardThumbnail as CardThumbnail,
  MoleculesCardInfo as CardInfo,
  MoleculesCardReview as CardReview,
} from '#components';
import { CardLayout, CardTheme, ECardLayout, ECardTheme } from '~~/types';
interface Props {
  cardLayout: CardLayout;
  theme: CardTheme;
}
definePageMeta({
  name: 'TheCard',
  components: {
    CardThumbnail,
    CardInfo,
    CardReview,
  },
});

withDefaults(defineProps<Props>(), {
  cardLayout: ECardLayout.VERTICAL,
  rating: 0,
  theme: ECardTheme.DEFAULT,
});
const cardStore = useCardStore();
const { cardData } = storeToRefs(cardStore);
</script>

<style scoped lang="scss">
.card {
  display: flex;
  border-radius: 5px;
  border: 1px solid $systemBorderColor;
  &--horizon {
    justify-content: flex-start;
    flex-direction: row;
    min-width: 520px;
    max-width: 880px;
  }
  &--vertical {
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    max-width: 390px;
    min-width: 250px;
  }
}
.card-thumbnail {
  flex-basis: 40%;
  &--horizon {
    height: 100%;
  }
}
.card-content {
  flex-basis: 60%;
  &--horizon {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  &--vertical {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}
</style>
