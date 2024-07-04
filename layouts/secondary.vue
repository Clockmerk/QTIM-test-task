<template>
  <div class="layout">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const styleLayout = ref('secondary');

provide('styleLayout', styleLayout);
</script>
