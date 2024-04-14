<script setup lang="ts">
    import type { Portfolio } from "~~/state/portfolio";

    const route = useRoute();

    const portfolioList = useState<Map<number, Portfolio>>("portfolioList");

    const portfolio = computed(
        ():Portfolio => {
            const id = route.params.id;
            return portfolioList.value.get(id) as Portfolio;
        }
    );

    const formattedPeriod = computed(() => {
        if (!portfolio.value.period) {
            return '';
        }

        try {
            const date = new Date(portfolio.value.period);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return `${year}年${month}月`;
        } catch (error) {
            console.error('不正な日付形式です:', portfolio.value.period);
            return '期間情報が取得できませんでした';
        }
    })

    const imgList = computed(() => {
        const thumbnailList: string[] = [];

        if (portfolio.value.top_img.url) {
            thumbnailList.push(portfolio.value.top_img.url);
        }

          // img_othersのURLを追加
        if(portfolio.value.img_others){
            for(var i = 0; i < portfolio.value.img_others.length; i++){
                thumbnailList.push(portfolio.value.img_others[i].url);
            }
        }

        return thumbnailList;
    });
    const selectedThumbnailIndex = ref(0); // 選択中のサムネイルインデックス


    const handleThumbnailClick = (index: number) => {
        if (index === selectedThumbnailIndex.value) return;

        document.querySelectorAll('.thumbnail.selected').forEach(element => {
            element.classList.remove('selected');
        });

        const currentMainImage = document.getElementById('main-image');
        const newMainImage = document.querySelector(`.thumbnail:nth-child(${index + 1}) img`);

        
        
        if (currentMainImage && newMainImage) {
            currentMainImage.style.transition = 'opacity 0.3s ease';
            currentMainImage.style.opacity = '0';

        setTimeout(() => {
            selectedThumbnailIndex.value = index;
            mainImageURL.value = imgList.value[index];
            

            newMainImage.parentNode.classList.add('selected');

            newMainImage.style.transition = 'opacity 0.1s ease';
            newMainImage.style.opacity = '1';

            setTimeout(() => {
                currentMainImage.style.display = 'block';
                currentMainImage.style.opacity = '1';
            }, 250);
            }, 250);
        }
    };

    const mainImageURL = ref(imgList.value[0]); // メイン画像のURL
    
    onMounted(() => {
    const firstThumbnail = document.querySelector('.thumbnail:nth-child(1)');
    if (firstThumbnail) {
        firstThumbnail.classList.add('selected');
        }
    });

</script>

<template>
    <div class="detail-container">
        <h2>{{portfolio.title}}</h2>
        <div class="portfolio-detail">
            <div class="image-container">
                <div id="main-image" class="main-image">
                    <img :src="mainImageURL" alt="Portfolio Thumbnail" />
                </div>
                <div class="thumbnail-list">
                    <div
                    v-for="(image, index) in imgList"
                    :key="index"
                    class="thumbnail"
                    @click="handleThumbnailClick(index)"
                    :class="{ selected: selectedThumbnailIndex.value === index }"
                    >
                    <img :src="image" :alt="image || 'Portfolio Image'" />
                </div>
            </div>
        </div>
        <div class="description-container">
            <div>
                <h3><strong>【概要】</strong></h3>
                <p>{{portfolio.outline}}</p>
            </div>
            <div>
                <h3><strong>【詳細】</strong></h3>
                <span v-html="portfolio.detail"></span>
            </div>
            <div>
                <h3>【制作時期】</h3>
                <p>{{formattedPeriod}}</p>
            </div>
            <div class="link-button-container">
                <a :href="portfolio.url" target="_blank">
                    <button class="link-button">
                        サイトを見る
                    </button>
                </a>
            </div>
        </div>
    </div>
</div>
<PortfolioListRoll />
<div class="link-button-container">
    <NuxtLink v-bind:to="{ name: 'Portfolio' }">
        <button class="link-button" style="font-size:14px">ポートフォリオサイト<br>トップへ</button>
    </NuxtLink>
</div>
</template>


<style scoped>
.detail-container{
    padding: 8px 3%;
    margin: 40px 0;
}

.portfolio-detail{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.image-container {
    width: 45%;
    margin:16px;
}

.main-image {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.main-image>img{
    width: 100%;
}

.thumbnail-list {
    margin-left: inherit;
    display: flex;
    flex-wrap:wrap ;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
}

.thumbnail-list>.thumbnail{
    width:150px;
    height:150px;
    transition:  0.3s ease; 
}

.thumbnail.selected {
    outline: 3px double #a2a2a1;
    outline-offset: -3px;
    transition:  0.3s ease; 
    opacity: .5;
}

.thumbnail-list img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    cursor: pointer;
}

.thumbnail-list>.thumbnail{
    margin:12px auto;
}

.description-container{
    width: 47%;
    padding:16px;
    background-color:rgba(250,250,250,0.7)
}

.description-container>div{
    margin-bottom:2.5em;
}


@media(max-width:600px){
    .image-container {
        width: 100%;
        margin:0 auto 40px;;
    }

    .thumbnail-list>.thumbnail{
        width:100px;
        height:100px;
        margin:20px auto;
    }

    .description-container{
        width:100%;
        padding:16px;
        background-color:rgba(250,250,250,0.7)
    }
}
</style>