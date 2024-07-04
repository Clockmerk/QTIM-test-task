<template>
  <header>
    <div class="header__logo">
      <NuxtLink to="/">
        <img
          :src="
            styleLayout === 'default' ? '/images/logos/logo.png' : '/images/logos/logo-2.png'
          "
          :style="{
            height: styleLayout === 'default' ? '25px' : '35px',
            width: styleLayout === 'default' ? '84px' : '144px',
          }"
          :alt="styleLayout === 'default' ? 'QTIM' : 'Payot'"
      ></NuxtLink>
    </div>
    <div class="header__controls">
      <nav :class="'header__controls-nav' + ' ' + styleLayout">
        <ul>
          <li v-for="link of ['Works', 'About']" :key="link" :class="'links'">
            <NuxtLink :to="`/${link}`" :active-class="styleLayout">{{
              link
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="header__controls-btns">
        <SelectImgs
          source="countries"
          :options="
            countries.map((country) => ({ label: country, value: country }))
          "
        />
        <button class="header__controls-btns-menu" @click="show = !show">
          <MenuIcon v-if="!show" /> <MenuOpenIcon v-else />
        </button>
        <button class="header__controls-btns-btn">Let's work</button>
      </div>
    </div>
  </header>
  <Transition>
    <div
      v-if="show"
      class="header__menu"
      :style="{
        backgroundColor: styleLayout === 'default' ? '#e2beff' : '#f8d5c3',
      }"
      @click.self="show = false"
    >
      <ul class="header__menu-links">
        <li @click="show = false">Back</li>
        <li v-for="link of ['Works', 'About']" :key="link" :class="'links'">
          <NuxtLink :to="`/${link}`" @click="show = false">{{ link }}</NuxtLink>
        </li>
      </ul>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { countries } from '~/utils/constantsInfo';
import { inject } from 'vue';
import MenuIcon from '@/public/svg/menu.svg';
import MenuOpenIcon from '@/public/svg/menu-open.svg';

const styleLayout = inject('styleLayout') as string;
const show = ref(false);

watch(show, () => {
  document.body.style.overflow = show.value ? 'hidden' : '';
});
</script>
<style scoped lang="scss">
.default {
  color: color('pink');
}

.secondary {
  color: color('cream');
}

header {
  min-height: 121px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  * {
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
  }
}

.header__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
}

.header__controls-nav {
  &.default {
    a:hover {
      color: color('pink');
    }
  }
  &.secondary {
    a:hover {
      color: color('cream');
    }
  }
}

ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.header__controls-btns {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.header__controls-btns-btn {
  height: 52px;
  width: 142px;
  background-color: black;
  border-radius: 30px;
  color: white;
  border: 1px solid #e8e8e8;
  cursor: pointer;
  &:hover {
    background-color: rgb(83, 83, 83);
  }
}

.header__controls-btns-menu {
  display: none;
  border: none;
  background: none;
}

.header__menu {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: black;
  a {
    color: white;
  }
  .header__menu-links {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 30px;
  }
}

@media screen and (max-width: 768px) {
  header {
    padding: 0 20px;
  }
  ul {
    gap: 10px;
  }
  .header__controls {
    gap: 10px;
  }
  .header__controls-btns {
    gap: 10px;
  }
}

@media screen and (max-width: 480px) {
  .header__controls-nav {
    display: none;
  }
  .header__controls-btns-btn {
    display: none;
  }
  .header__controls-btns-menu {
    display: block;
  }
}
</style>
