<template>
  <img
    ref="imageRef"
    :class="['card-thumbnail-image', `card-thumbnail-image--${cardLayout}`]"
    :src="defaultSrc"
    :data-src="imgSrc"
    :alt="alt"
  />
</template>

<script setup lang="ts">
import { CardLayout, ECardLayout } from '~~/types';

interface Props {
  cardLayout: CardLayout;
  imgSrc: string;
  defaultSrc: string;
  alt: string;
}

definePageMeta({
  name: 'CardThumbnail',
});

withDefaults(defineProps<Props>(), {
  cardLayout: ECardLayout.VERTICAL,
  imgSrc: '',
  defaultSrc: '',
  alt: 'cardThumbnail',
});

const imageRef = ref<HTMLDivElement | null>(null);
const setImageUrl = () => {
  const imgTag = imageRef.value! as HTMLImageElement;
  imgTag.src = imgTag.dataset.src!;
};

const DELAY_TIME_MS = 250;

onMounted(() => {
  setTimeout(() => {
    setImageUrl();
  }, DELAY_TIME_MS);
});
</script>

<style scoped lang="scss">
.card-thumbnail-image {
  width: 100%;
  &--horizon {
    border-radius: 5px 0px 0px 5px;
    height: 100%;
  }
  &--vertical {
    border-radius: 5px 5px 0px 0px;
  }
}
</style>
