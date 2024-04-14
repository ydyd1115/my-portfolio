<template>
    <div class="header-container">
        <h1>My Portfolio</h1>
        <p>Yoshikazu Douko</p>
    </div>
</template>

<script></script>

<style>
.header-container{
    position:relative;
    height:160px;
    background: linear-gradient(73deg, rgba(241,208,147,1) 0%, rgba(171,127,16,1) 100%);
    text-align: center;
    color:white;
    }

.header-container>h1{
    font-size:3.5em;
    letter-spacing: 12px;
    position:relative;
    top:50%;
    transform: translateY(-50%);
    text-shadow: 0px 1px 6px rgba(0,0,0,0.3);
}
.header-container>p{
    position:absolute;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    text-shadow: 1px 1px 0px rgba(50,50,50,0.4);
}

@media(max-width:600px){
    .header-container {
        height: 180px;
    }

    .header-container>h1{
        font-size:2em;
    }
}
</style>