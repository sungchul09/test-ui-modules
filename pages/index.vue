<template>
  <div class="main"></div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
const router = useRouter();
onMounted(() => {
  router.push('/card');
});
</script>

<style lang="scss" scoped></style>
