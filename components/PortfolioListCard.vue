<script setup lang="ts">
    import type { Portfolio } from "~~/state/portfolio";

    interface Props{
        id: number;
    }

    const props = defineProps<Props>();
    const portfolioList = useState<Map<number, Portfolio>>("portfolioList");
    
    const portfolio =  portfolioList.value.get(props.id) as Portfolio;

</script>
    
<template>
    <NuxtLink v-bind:to="{ name: 'Portfolio-id', params: { id: portfolio.id } }">
        <div class="portfolio-card">
            <img :src="portfolio.top_img.url || 'placeholder.jpg'" alt="Portfolio Thumbnail" />
            <div class="portfolio-info">
                <h2>{{ portfolio.title }}</h2>
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>

.portfolio-list-random .portfolio-card{
    width: 85%;
    padding: 5%;
    margin:16px auto;
    max-width:600px;
}

.portfolio-card{
    margin:16px;
    width:250px;
    min-height:250px;
    text-align: center;
    padding:12px;
    border-radius:1%;
    box-shadow:0 0 50px rgba(50,50,50,0.1);
    transition: 1s
}

.portfolio-card:hover{
    opacity: 0.4;
    transition: 0.4s;
}

.portfolio-card img {
    width: 75%;
    height: 75%;
    margin:0 auto;
    object-fit: cover;
}

.portfolio-info{
    width:100%;
    overflow-wrap: break-word;
    color: #494949;
}
.portfolio-info>h2{
    width:100%;
    font-size:18px;
    margin: 0 auto;
}

@media(max-width:600px){


}
</style>