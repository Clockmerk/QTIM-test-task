<template>
  <article class="article-card">
    <div class="article-card__img">
      <NuxtImg
        :src="imageUrl"
        :alt="img.slice(img.lastIndexOf('/') + 1)"
        @error="handleImageError"
      />
    </div>
    <div class="article-card__info">
      <p class="article-card__title">{{ preview }}</p>
    </div>
    <NuxtLink
      :to="`/article/${id}`"
      :class="'article-card__link' + ' ' + styleLayout"
      >Read more</NuxtLink
    >
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  preview: {
    type: String,
    required: true,
  },
});

const imageUrl = ref(props.img);
const handleImageError = () => {
  imageUrl.value = 'fallback.png';
};

const styleLayout = inject('styleLayout');
</script>

<style scoped lang="scss">

.article-card {
  width: 281px;
  min-height: 386px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: 20px;
    line-height: 24px;
  }
  &:hover {
    transform: translateY(-20px);
    .article-card__link {
      opacity: 1;
    }
  }
}

.article-card__img {
  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
  }
}

.article-card__link {
  opacity: 0;

  &.default {
    color: color('pink');
  }
  &.secondary {
    color: color('cream');
  }
}
</style>
