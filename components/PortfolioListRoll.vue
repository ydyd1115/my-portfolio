<script setup lang="ts">
import type { Portfolio } from "~~/state/portfolio";

const portfolioList = useState<Map<number, Portfolio>>("portfolioList");

onMounted(() => {
    const portfolioListRoll = document.getElementById('portfolio-list-roll');
    portfolioListRoll.style.opacity = 0;
        setTimeout(()=>{
            portfolioListRoll.style.opacity = 1;
            portfolioListRoll.style.transition = 'opacity 2s ease-in';
    },2000)
});

</script>
    
<template>
<div class="scroll-infinity">
    <div class="scroll-infinity__wrap">
        <LoadingLoading/>
        <div id="portfolio-list-roll" class="portfolio-list-roll scroll-infinity__list scroll-infinity__list--left">
            <PortfolioListCard
            class="scroll-infinity__item"
            v-for ="id in portfolioList.keys()"
            v-bind:key="id"
            v-bind:id="id" />
            <PortfolioListCard
            class="scroll-infinity__item"
            v-for ="id in portfolioList.keys()"
            v-bind:key="id"
            v-bind:id="id" />
        </div>
    </div>
</div>
</template>

<style>
#portfolio-list-roll{
    opacity: 0;
    padding: 8px;
    background: rgba(255, 255, 255, 0.7);
}
@keyframes infinity-scroll-left {
    from {
        transform: translateX(0);
        }
            to {
            transform: translateX(-100%);
        }
    }
    .scroll-infinity__wrap {
        display: flex;
        overflow: hidden;
        position:relative;
    }
    .scroll-infinity__list {
        display: flex;
        list-style: none;
        padding: 0
    }
    .scroll-infinity__list--left {
        animation: infinity-scroll-left 50s infinite linear 0.5s both;
    }
    .scroll-infinity__item {
        width: calc(100vw / 4);
    }
    .scroll-infinity__item>img {
        width: 100%;
    }


    @media(max-width:600px){
        .scroll-infinity__item {
            width: calc(100vw / 1.5);
        }

    }
</style>