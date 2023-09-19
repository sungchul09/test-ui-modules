<template>
  <div v-if="rendering" class="card-page">
    <TheCard card-layout="vertical" theme="default" />
    <TheCard card-layout="vertical" theme="simple" />
    <TheCard card-layout="vertical" theme="remove" />
    <TheCard card-layout="horizon" theme="default" />
  </div>
</template>
<script setup lang="ts">
import { OrganismsTheCard as TheCard } from '#components';
import { useCardStore } from '~~/stores';
definePageMeta({
  layout: 'default',
  components: {
    TheCard,
  },
});
const cardStore = useCardStore();
const { setCardData } = cardStore;
const rendering = ref<boolean>(false);
onMounted(() => {
  setCardData();
  rendering.value = true;
});
</script>

<style scoped lang="scss">
.card-page {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 50px;
  flex-direction: row;
  justify-content: space-around;
  padding: 100px;
}
</style>
