<script setup lang="ts">
  const text = ref('');
  const textLength = ref(0);


  onMounted(() => {
    const animationText = 'Loading'; // または 'loading'
    textLength.value = animationText.length;

    for (let i = 0; i < animationText.length; i++) {
      setTimeout(() => {
        text.value += animationText[i];
      }, 60* i);
      
    };
    setTimeout(() => {
      const loadingloading = document.getElementById('loading-loading');
      loadingloading.parentNode.removeChild(loadingloading);
    }, 2500);
  });
</script>
<template>
    <div id="loading-loading" class="loading-loading">
        <div class="loading-text">
            <span class="loading-char" v-for="(char, index) in text" :key="index">{{ char }}</span>
        </div>
    </div>
</template>


<style scoped>
.loading-loading {
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;;
    align-items: center;
    width: 100%;
}

.loading-text {
    opacity: 0;
    font-size:5vw;
    letter-spacing:1vw;
    font-weight: bold;
    animation: loading-text-animation 2.5s linear;
    text-shadow:1px 1px 4px rgba(100,100,100 .3)
}

@keyframes loading-text-animation {
  0% {
    opacity:1;
  }
  100% {
    opacity:0;  
}
}
</style>
