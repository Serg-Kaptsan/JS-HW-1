
<template>
    <div class="container">
        <CardComponent v-for="developer in developers" :key="developer.name" :data="developer" />
  </div>
  </template>
  
  <script>
    import CardComponent from "@/components/CardComponent.vue";
  
  export default {
    components: {
        CardComponent
    },
    props: {
      developers: Array
    }
  };
  </script>
  
  <style scoped>
.container{
    display: flex;
    margin-top: 50px;
    margin-left: 350px;
}
  </style>