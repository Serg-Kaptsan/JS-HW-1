
<template>
    <div class="icons">
      <img class="icon" v-for="icon in icons" :key="icon" :src="getIconPath(icon)" :alt="icon">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      icons: Array
    },
    methods: {
      getIconPath(iconName) {
        return `images/icons/${iconName}.png`;
      }
    }
  };
  </script>
  
  <style scoped>
  .icon{
    width: 50px;
    height: 50px;
    }
  .icon + .icon{
    margin-left: 15px;    
    }
  </style>