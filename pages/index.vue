<template>
  <section class="main-page">
    <NuxtImg src="home.png" alt="QTIM" />
    <h1>QTIM - тестовое задание</h1>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;

  h1 {
    font-size: 40px;
    font-weight: 400;
    line-height: 40px;
    text-align: left;
  }
}
</style>
