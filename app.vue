<script setup lang="ts">
  import type { Portfolio } from "~~/state/portfolio";

  const { data } = await useMicroCMSGetList<Portfolio>({
    endpoint: "portfolio",
  });

  onMounted(() => {
  });


  useState<Map<number, Portfolio>>(
    "portfolioList",
    () => {
      const portfolioListInit = new Map<number, Portfolio>();
      
      // data.valueがundefinedでないことを確認してからループを実行する
      if (data.value?.contents) {
        for (var i = 0; i < data.value.contents.length; i++) {
          // ポートフォリオのIDを取得
          const id = data.value.contents[i].id;
          
          // Mapにポートフォリオを追加
          portfolioListInit.set(id, data.value.contents[i]);
        }
      }
      
      return portfolioListInit;
    }
  );

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if (window.scrollY > 120) {
      hamburgerMenu.style.background = 'rgba(255,255,255,0.7)';
      hamburgerMenu.style.transition = 'background 0.25s ease-in-out'; // アニメーションを追加
    } else {
      hamburgerMenu.style.background = 'none';
    }
  };

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const isPortfolioListOpen = ref(false);

  const togglePortfolioList = () => {
    isPortfolioListOpen.value = !isPortfolioListOpen.value;
    
  };

</script>
<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <div class="top-portfolio-list">
      <div id="hamburger-menu" class="hamburger-menu" 
        :style="{ background: scrollTop > 0 ? 'rgba(250,250,250,0.8)' : 'none' }">
        <p>リスト on/off</p>
        <div class="hamburger-menu-lines" @click="togglePortfolioList">
          <span class="line line-1" :class="{ 'modal-open': isPortfolioListOpen}"></span>
          <span class="line line-2" :class="{ 'modal-open': isPortfolioListOpen}"></span>
          <span class="line line-3" :class="{ 'modal-open': isPortfolioListOpen}"></span>
        </div>
      </div>
      <div
        class="top-portfolio-list-modal-wrapper"
        :class="{ 'modal-open': isPortfolioListOpen }"
        >
        <PortfolioList
        class="top-portfolio-list-modal"
        @click="togglePortfolioList"
        />
      </div>
    </div>
    <NuxtPage/>
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>


<style>
*{
    margin:0;
    padding:0;
}

body,html {
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  font-weight:500;
  color:#494949;
  width:100%;
  margin:0 auto;
} 

body {
  background-image: url('assets/img/back.webp');
  background-size: contain; 
  background-position: center;
}

body>main{
  width:90%;
}

h3{
  font-size:1.5em;
}

a{
  text-decoration: none;
}

a:visited {
  color:#494949;
}

.top-portfolio-list{
  position:relative;
}

.top-portfolio-list-modal-wrapper{
  position:fixed;
  top:0;
  opacity:0;
  transition:1s ease-in-out;
  pointer-events: none; 
  overflow: hidden;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 95%, rgba(255, 255, 255, 0) 100%);
  z-index:1000;
}

.top-portfolio-list-modal {
  overflow-y: scroll;
  margin-top: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height:85vh;
}

.top-portfolio-list-modal-wrapper.modal-open {
  opacity:1;
  transition:1s ease-in-out;
  pointer-events: auto; 
}

.hamburger-menu{
  position: fixed;
  top: 48px;
  right: 48px;
  z-index: 100;
  padding: 8px;
  border-radius:4px;
  z-index: 1001;
}

.hamburger-menu-lines {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 30px;
  margin: 4px auto;
  }

.hamburger-menu-lines .line {
  width: 100%;
  height: 3px;
  background-color:#555;
  margin-bottom: 5px;
  transition:  0.3s ease;
}

.hamburger-menu-lines .line-1.modal-open {
  transform: translateY(8px) rotate(45deg);
  transition: 0.3s;
}

.hamburger-menu-lines .line-2.modal-open {
  opacity: 0;
}

.hamburger-menu-lines .line-3.modal-open {
  transform: translateY(-8px) rotate(-45deg);
  transition: 0.3s;
}

.greeting{
  text-align: center;
  margin-top:32px;
  font-size:1.2em;
}

.link-button-container{
  text-align: center;
  margin:4em auto;
}

.link-button{
    width: 75%;
    max-width:500px;
    font-size: 1.25em;
    padding: 8px 16px;
    border: double 3px #bbb;
    box-shadow: 1px 2px 4px rgba(150,150,150,.5);
    background: linear-gradient(58deg, rgba(221, 208, 147, 1) 0%, rgba(171, 127, 16, 1) 100%);
    color: white;
    text-shadow:1px 1px 2px rgba(50,50,50,.5);
    letter-spacing: 8px;
    transition:1s;
}

.link-button:hover{
  opacity: 0.7;
  transition:.5s;
}
.for-sp{
  display:none;;
}

  @media(max-width:600px){
    .hamburger-menu{
      top: 4px;
      right: 4px;
    }

    .greeting{
      margin-top:24px;
    }

    .top-portfolio-list-modal {
      height:95vh;
    }

    .for-sp{
      display:inline-block;
    }
}
</style>