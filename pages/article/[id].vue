<template>
  <article class="article-page">
    <p v-if="error">Error: {{ error.statusMessage }}</p>
    <div
      v-else
      class="article-page__info"
      :style="{
        alignItems: styleLayout === 'default' ? 'flex-start' : 'center',
      }"
    >
      <h1>{{ articleInfo.preview }}</h1>
      <NuxtImg
        :src="imageUrl"
        :alt="articleInfo.image?.slice(articleInfo.image.lastIndexOf('/') + 1)"
        @error="handleImageError"
      />
      <div class="article-page__info-desc">
        <p>About</p>
        <p>{{ articleInfo.description }}</p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Article } from '~/types';

const styleLayout = inject('styleLayout');
const { id } = useRoute().params;
const { data: articles } = useNuxtData('articles');

const articleInfo = ref({} as Article);
const imageUrl = ref(articleInfo.value?.image);

const { data, error } = articles.value
  ? useLazyFetch(`${BASEURL}/${id}`, {
      key: `article-${id}`,
      default() {
        return articles.value.find((article: Article) => article.id === id);
      },
    })
  : await useFetch(`${BASEURL}/${id}`, {
      key: `article-${id}`,
    });

articleInfo.value = data.value;

const handleImageError = () => {
  imageUrl.value = 'fallback.png';
};
</script>

<style scoped lang="scss">
.article-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 84px;
    font-weight: 400;
    line-height: 84px;
    text-align: left;
  }

  p {
    font-size: 36px;
    font-weight: 400;
    line-height: 44.64px;
    text-align: left;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}
.article-page__info {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.article-page__info-desc {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  :nth-child(1) {
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
  }
}

@media screen and (max-width: 1024px) {
  .article-page {
    h1 {
      font-size: 30px !important;
      line-height: 50px;
    }
  }
  .article-page__info {
    gap: 30px;
  }

  .article-page__info-desc {
    width: 100%;
  }
}
</style>
