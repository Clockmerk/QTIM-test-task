<template>
  <div class="layout">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const styleLayout = ref('default');

provide('styleLayout', styleLayout);
</script>
