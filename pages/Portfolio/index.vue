<script setup lang="ts">
</script>

<template>
    <div>
        <div class="greeting">
            <p>
                当ポートフォリオサイトへ<br class="for-sp">
                ご訪問いただきありがとうございます。<br>
                サムネイルをクリックして詳細をご覧ください。<br>
                右上のボタンより一覧表示が可能です。<br>

            </p>
        </div>
        <PortfolioListRandom />
        <PortfolioListRoll />
    </div>
</template>

<style scoped>
#portfolio-list-random{
    opacity:0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin:40px auto;
}


@media(max-width:600px){
    .portfolio-list-random{
        flex-direction: column;
    }
}

</style>