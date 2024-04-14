<template>
    <div class="footer-container">
        <!-- <div class="profile">
            <div>
                <h2>プロフィール</h2>
                <figure class="profile-img">
                    <img src="~~/assets/img/profile_img.jpg" alt="ドウコ　ヨシカズ">
                </figure>
            </div>
        </div> -->
        <p class="copy-right">
            <small>&copy;ドウコ　ヨシカズ 2024～</small>
        </p>
    </div>
</template>
<style scoped>
.footer-container{
    position:relative;
    height:32px;
    background: linear-gradient(73deg, rgba(241,208,147,1) 0%, rgba(171,127,16,1) 100%);
    text-align: center;
    color:white;
    }

.footer-container>h1{
    font-size:3.5em;
    letter-spacing: 12px;
    position:relative;
    top:50%;
    transform: translateY(-50%);
    text-shadow: 0px 1px 6px rgba(0,0,0,0.3);
}
.footer-container>p{
    position:absolute;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    text-shadow: 1px 1px 0px rgba(50,50,50,0.4);
}

@media(max-width:600px){
    .footer-container>h1{
        font-size:2em;
    }
}
.profile-img{
    width:300px;
    height:auto;
    background:rgba(240,240,240,.2);
    box-shadow:0 0 50px rgba(50,50,50,.1);
    padding:24px;
    text-align:center;
}

.profile-img>img{
    width:240px;
    height:240px;
    border-radius:50%;
    border:double 3px #fff;
}

.copy-right{
    text-align:center;
}

</style>