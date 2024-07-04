<template>
  <button
    class="button-custom"
    :class="
      (styling === 'active' && content === 'icon' ? 'default' : styling) +
      ' ' +
      content
    "
  >
    <template v-if="content === 'icon'"> <ArrowIcon class="svg" /> </template>
    <slot v-if="content === 'text'" />
  </button>
</template>

<script setup lang="ts">
import ArrowIcon from '@/public/svg/arrow.svg';

const props = defineProps({
  content: {
    type: String,
    required: true,
    validator(value: string) {
      return ['text', 'icon'].includes(value);
    },
  },
  styling: {
    type: String,
    required: true,
    validator(value: string) {
      return ['default', 'active'].includes(value);
    },
  },
});

const slots = useSlots();

if (props.content === 'text' && !slots.default) {
  throw new Error('No default slot in ButtonCustom component');
}
</script>

<style scoped lang="scss">
.button-custom {
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #e8e8e8;
  background-color: transparent;
  cursor: pointer;
}

.default {
  &.icon {
    background-color: transparent;
  }
  &.text {
    background-color: #f3f3f3;
  }
  &:hover {
    background-color: #e8e8e8;
  }
}

.active {
  background-color: black;
  color: white;
}

.svg {
  margin: 0;
  color: transparent;
  stroke: #494949;
  width: 5px;
  height: 10px;
}
</style>
