<template>
  <footer :class="styleLayout">
    <p style="align-self: start">Is there a project?</p>
    <div class="footer__heading">
      <div class="footer__heading-title">
        <h1>Let’s work together</h1>
      </div>

      <div class="footer__heading-contacts">
        <ul>
          <li v-for="(contact, index) of contactList" :key="contact.title">
            <p>{{ contact.title }}</p>
            <a
              v-if="index === 0"
              :href="`tel:${contact.content}`"
              target="_blank"
              >{{ contact.content }}</a
            >
            <p v-else>{{ contact.content }}</p>
            <a
              v-if="index === 0"
              :href="`mailto:${contact.address}`"
              target="_blank"
              >{{ contact.address }}</a
            >
            <p v-else>{{ contact.address }}</p>
            <a v-if="index !== 0" :href="contact.link" target="_blank"
              ><ButtonIcon>
                <TelegramIcon
                  :class="'footer__footer-icon-telegram' + ' ' + styleLayout"
                />
              </ButtonIcon>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__footer">
      <div class="footer__footer-links">
        <ul>
          <li v-for="link of Array.from(links).slice(0, 3)" :key="link[0]">
            <a :href="link[1]" target="_blank">{{ link[0] }}</a>
          </li>
        </ul>
      </div>
      <div class="footer__footer-logo">Go</div>
      <div class="footer__footer-links">
        <ul>
          <li v-for="link of Array.from(links).slice(3)" :key="link[0]">
            <a :href="link[1]" target="_blank">{{ link[0] }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import TelegramIcon from '@/public/svg/telegram.svg';
import { contactList, links } from '~/utils/constantsInfo';
import { inject } from 'vue';

const styleLayout = inject('styleLayout');
</script>

<style scoped lang="scss">
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 112px;
  padding-top: 140px;
  &.default {
    background: color('pink');
  }
  &.secondary {
    background: color('cream');
  }
}

.footer__heading,
.footer__footer {
  display: flex;
  width: 100%;
}

.footer__heading {
  margin-top: 50px;
  gap: 30%;
}

.footer__footer {
  margin-top: 150px;
}

.footer__heading-title {
  max-width: 510px;
  h1 {
    font-weight: 400;
    font-size: 112px;
    line-height: 112px;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 18px;
  }
}

ul,
li {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer__heading-contacts {
  max-width: 200px;
  ul {
    gap: 32px;
  }
  li {
    gap: 8px;
  }
}

.footer__footer {
  align-items: end;
  justify-content: space-between;
}

.footer__footer-logo {
  padding-bottom: 20px;
  display: flex;
  align-items: end;
  justify-content: center;
  width: 20rem;
  height: 10rem;
  background: black;
  border-radius: 10rem 10rem 0 0;
  color: white;
  font-size: 32px;
  line-height: 32px;
}

.footer__footer-links {
  ul {
    flex-direction: row;
    gap: 30px;
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
  padding-bottom: 20px;
}

.footer__footer-icon-telegram {
  margin: 0;
  color: transparent;
  &.default {
    stroke: color('pink');
  }
  &.secondary {
    stroke: color('cream');
  }
}


@media screen and (max-width: 1130px) {
  .footer__footer {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
  }
  .footer__footer-logo {
    border-radius: 50%;
    width: 20rem;
    height: 20rem;
    align-items: center;
  }
}

@media screen and (max-width: 768px) {
  footer {
    padding: 50px 20px 10px 20px;
  }

  .footer__heading {
    flex-direction: column;
    align-items: center;

    gap: 50px;
  }
}

@media screen and (max-width: 350px) {
  .footer__heading-title {
    h1 {
      line-height: 64px;
      text-align: center;
    }
  }

  .footer__heading,
  .footer__footer {
    flex-direction: column;
  }

  .footer__footer-logo {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    align-items: center;
  }
  .footer__footer-links {
  ul {
    gap: 15px;

  }
}
}
</style>
