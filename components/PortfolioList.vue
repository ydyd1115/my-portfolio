<script setup lang="ts">
    import type { Portfolio } from "~~/state/portfolio";

    const portfolioList = useState<Map<number, Portfolio>>("portfolioList");

</script>
    
<template>
    <div class="portfolio-list">
        <PortfolioListCard
        v-for ="id in portfolioList.keys()"
        v-bind:key="id"
        v-bind:id="id"    />
    </div>
</template>


<style scoped>
.portfolio-list {
    width:100%;
    box-shadow:0 0 100px rgba(100,100,100,.1);
    display:flex;
    justify-content:space-around;
}
</style>
