
<template>
    <div class="card">
      <div class="wave circle_1"></div>
      <div class="wave circle_2"></div>
      <div class="wave circle_3"></div>
      <img class="avatar" :key="data.avatar" :src="getAvatarPath(data.avatar)" :alt="data.name">
      <h5>{{ data.name }}</h5>
      <h6>{{ data.role }}</h6>
      <div class="icons">
        <IconContainer :icons="data.icons" />
      </div>
    </div>
  </template>
  
  <script>
  import IconContainer from "@/components/IconContainer.vue";

  export default {
    components:{
      IconContainer,
    },
    props: {
      data: Object
    },
    methods: {
      getAvatarPath(avatar) {
        return `images/avatars/${avatar}.jpg`;
      }
    }
  };
  </script>
  
  <style scoped>
    .card{
        position: relative;
        width: 295px;
        height: 470px;
        background: white;
        text-align: center;
        border-radius: 19px;
        border: solid 1px white;
        margin-right: 22px;
    }
    .wave, .avatar{
        border-radius: 50%;
        position: absolute;
        left: 50%;
        transform: translate(-50%);   
    }
    .wave{
        left: 50%;
        transform: translate(-50%);
        background: linear-gradient(224.56deg, #7FADF4 0.75%, #6181F7 100%);  
    }
    .circle_1{
        width: 167px;
        height: 167px;
        top: 33px;
        opacity: 8%;
    }
    .circle_2{
        width: 151px;
        height: 151px;
        top: 41px;
        opacity: 10%;
    }
    .circle_3{
        width: 136px;
        height: 136px;
        top: 49px;
        opacity: 12%;
    }
    .avatar{
        width: 120px;
        height: 120px;
        top: 56px;
    }
    h5{
      margin-top: 210px;
      margin-bottom: 0;
      font-weight: 700;
      font-size: 20px;
      line-height: 32.8px;
      letter-spacing: -0.63px;
      color: #2D3640;
    }
    h6{
      margin-top: 0;
      font-weight: 300;
      font-size: 16px;
      line-height: 26.24px; 
      color: #4B4F52;
    }
    .icons{
      margin-top: 33px;
    }
    h5, h6{
      font-family: 'Catamaran', sans-serif !important;
    }
    @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;700&display=swap'); 
  </style>