<template>
  <section class="articles-page">
    <h1>Articles</h1>
    <p v-if="error">{{ error.statusMessage }}</p>

    <div class="articles-page__containter">
      <p v-if="!articlesArray.length">No articles</p>
      <ArticleCard
        v-for="article in articlesArray.slice((page - 1) * 8, page * 8)"
        :id="article.id"
        :key="article.id"
        :img="article.image"
        :preview="article.preview"
      />
    </div>

    <ul class="articles-page__pagination">
      <ButtonCustom
        v-if="page > 1"
        class="articles-page__pagination-button"
        content="icon"
        :styling="'default'"
        @click="page -= 1"
      />
      <ButtonCustom
        v-for="element in paginationArray.slice(page - 1, page + 4)"
        :key="element"
        content="text"
        :styling="element === page ? 'active' : 'default'"
        @click="page = element"
      >
        {{ element }}
      </ButtonCustom>
      <ButtonCustom content="icon" :styling="'default'" @click="page += 1" />
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Article } from '~/types';

const articlesArray = ref<Article[]>([]);
const paginationArray = ref<number[]>([]);
const page = ref(1);

const { data, error } = await useFetch(BASEURL, {
  key: 'articles',
});

articlesArray.value = data.value as Article[];
paginationArray.value = Array.from(
  { length: Math.ceil(articlesArray.value.length / 8) },
  (_, i) => i + 1
);
</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 84px;
    line-height: 84px;
    font-weight: 400;
  }
}

.articles-page__containter {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  justify-content: start;
}

.articles-page__pagination {
  margin-top: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.articles-page__pagination-button {
  rotate: 180deg;
}

@media screen and (min-width: 1440px) {
  .articles-page__containter {
    gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 300px));
  }
}

@media screen and (max-width: 640px) {
  .articles-page__containter {
    justify-content: center;
  }
  
}
</style>
