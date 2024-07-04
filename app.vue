<template>
  <button
    class="button-layout"
    @click="layout = layout === 'default' ? 'secondary' : 'default'"
  >
    Layout
  </button>
  <NuxtLoadingIndicator :color="layout === 'default' ? '#e2beff' : '#f8d5c3'" />
  <NuxtLayout :name="layout">
    <main>
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Qtim-test-task',
  meta: [{ name: 'qtim-test-task', content: 'Тестовое задание' }],
});

const layout = ref();

onMounted(() => {
  if (!layout.value) {
    layout.value = 'default';
  }
});
</script>

<style scoped lang="scss">
.button-layout {
  border: none;
  background-color: transparent;
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
}
</style>
