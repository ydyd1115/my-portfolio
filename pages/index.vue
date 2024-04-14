<script setup lang="ts">
import type { Portfolio } from "~~/state/portfolio";

const portfolioList = useState<Map<number, Portfolio>>("portfolioList");


</script>

<template>
  <div class="portfolio-container">
    <div class="greeting">
      <p style="line-height:1.5em;">
          当ポートフォリオサイトへ<br class="for-sp">
          ご訪問ただきありがとうございます。<br>
          こちらのページはプロフィール等を掲載予定です。
          下記リンクよりポートフォリオをご利用ください。
      </p>
    </div>
    <div class="link-button-container">
      <NuxtLink v-bind:to="{ name: 'Portfolio' }">
          <button class="link-button"  style="font-size:14px">ポートフォリオサイト<br>トップへ</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.portfolio-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

</style>
