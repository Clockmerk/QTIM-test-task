<template>
  <div class="select-imgs">
    <div
      class="select-imgs__box"
      :style="{
        backgroundImage: `url('/images/${source}/${selectedValue}.png')`,
      }"
      @click="show = !show"
    >
      <ul v-if="show" class="select-imgs__list">
        <li
          v-for="option in options.filter(
            (option) => option.value !== selectedValue
          )"
          :key="option.value"
          :value="option.value"
          :style="{
            backgroundImage: `url('/images/${source}/${option.value}.png')`,
          }"
          @click="selectedValue = option.value"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Option {
  value: string;
  label: string;
}

const props = defineProps({
  source: {
    type: String,
    required: true,
  },
  options: {
    type: Array as () => Option[],
    required: true,
  },
});

const selectedValue = ref(props.options[2].value);

const show = ref(false);
</script>

<style scoped lang="scss">
.select-imgs {
  z-index: 1;
  width: 52px;
  height: 52px;
  border: 2px solid #0000001a;
  border-radius: 50%;
  overflow: unset;
  padding: 10px;
  cursor: pointer;
  ul {
    list-style: none;
    opacity: 1;
    margin-top: 90px;
    width: 30px;
    height: 30px;
  }
}

.select-imgs__box {
  display: flex;
  align-items: center;
  justify-content: center;

  &,
  li {
    margin-bottom: 3px;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
}
</style>
