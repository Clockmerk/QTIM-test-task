<template>
  <button class="button-icon">
    <slot />
  </button>
</template>

<script setup lang="ts">
const slots = useSlots();
if (!slots.default) {
  throw new Error('No default slot in ButtonIcon component');
}
</script>

<style scoped lang="scss">
.button-icon {
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: white 1px solid;
  border-radius: 50%;
  background-color: black;
  cursor: pointer;
}
</style>
