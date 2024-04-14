<script setup lang="ts">
import type { Portfolio } from "~~/state/portfolio";

const portfolioList = useState<Map<number, Portfolio>>("portfolioList");

// ランダムな 2 つの ID を取得
const getRandomIds = () => {
  const shuffledIds = [...portfolioList.value.keys()];

  // ランダムな 2 つのインデックスを取得
  const randomIndicesIds = new Set();
  while (randomIndicesIds.size < 2) {
    const randomIndex = Math.floor(Math.random() * shuffledIds.length);
    randomIndicesIds.add(randomIndex);
  }

  // ランダムなインデックスに基づいてキーを取得
  const randomIds = [];
  for (const index of randomIndicesIds) {
    randomIds.push(shuffledIds[index]);
  }

  return randomIds;
};
// 表示中のポートフォリオ ID
const displayedIds = ref(getRandomIds());


// マウント時にフェードインを実行
onMounted(() => {
  const portfolioListRandom = document.getElementById('portfolio-list-random');
  if (portfolioListRandom) {
    portfolioListRandom.style.opacity = 0; // 空フェードイン準備
    setTimeout(() => {
      portfolioListRandom.style.opacity = 0; 
      setTimeout(() => {
        // フェードイン/フェードアウトアニメーションを繰り返し実行
        startFadeAnimation();
      }, 100);
    }, 100); 
  }

// フェードイン/フェードアウトアニメーションを実行
const startFadeAnimation = () => {
  const portfolioListRandom = document.getElementById('portfolio-list-random');
  if (portfolioListRandom) {
    // 新しいIDを取得
    const newIds = getRandomIds();

    // フェードインアニメーション
    portfolioListRandom.style.opacity = 0;
    portfolioListRandom.style.transition = 'opacity 2s ease-in';
    setTimeout(() => {
      // フェードインアニメーション終了後にフェードアウトアニメーション
      startFadeOutAnimation(newIds);
    }, 2000);

    // フェードインアニメーション終了後に`displayedIds`を更新
    setTimeout(() => {
      displayedIds.value = newIds;
    }, 2000);
  }
};

// フェードアウトアニメーションを実行
const startFadeOutAnimation = (newIds) => {
  const portfolioListRandom = document.getElementById('portfolio-list-random');
  if (portfolioListRandom) {
    portfolioListRandom.style.opacity = 1;
    portfolioListRandom.style.transition = 'opacity 2s ease-out';
    setTimeout(() => {
      // フェードアウトアニメーション終了後に新しいID取得
      startFadeAnimation(); // フェードイン/フェードアウトアニメーションを繰り返し実行
    }, 2000);
  }
};
});

</script>

<template>
  <div class="portfolio-list-random-wrapper">
    <LoadingWelcome/>
    <div id="portfolio-list-random" class="portfolio-list-random">
      <PortfolioListCard
      v-for ="id in displayedIds"
      v-bind:key="id"
      v-bind:id="id"    />
    </div>
  </div>
</template>

<style scoped>
#portfolio-list-random{
  opacity:0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin:40px auto;
  height:520px;
}

.portfolio-list-random-wrapper{
  position: relative;
}


@media(max-width:600px){
  .portfolio-list-random{
      flex-direction: column;
      height: 85vh;
  }
}

</style>
