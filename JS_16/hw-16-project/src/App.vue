
<template>
    <div id="app">
        <HomePage />        
    </div>
  </template>
  
  <script>
  import HomePage from "@/views/HomePage.vue";
  
  export default {
    components: {
      HomePage
    }
  };
  </script>
  
  <style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    padding-top: 58px;
    background-color: rgba(242, 242, 242);
  }
  </style>