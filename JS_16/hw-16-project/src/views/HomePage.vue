<template>
    <div class="cover">
      <HeaderContainer :headerData="headerData" />
      <CardContainer :developers="developersData" />
    </div>
  </template>
  
  <script>
  import HeaderContainer from "@/components/HeaderComponent.vue";
  import CardContainer from "@/components/CardContainer.vue";
  
  export default {
    components: {
      HeaderContainer,
      CardContainer
    },
    data() {
      return {
        headerData:{
            title:'Best Developers ',
            text:'On The Planet',
            description:'This Product integrates with your favorite apps to automate workflows and ensure smooth, productive work days.',
        },
        developersData: [
            {name:'Dan Burykin', role:'Vue.JS Developer',  icons: ['icon-Vuejs'], avatar:'Dan_Burykin'},
            {name:'Esi Doda', role:'Software Developer',  icons: ['icon-angular', 'icon-flutter', 'ReactJS'], avatar:'Esi_Doda'},
            {name:'Alex Harper', role:'RN Executive',  icons: ['icon-java', 'icon-react'], avatar:'Alex_Harper'},
            {name:'Amarna Miller', role:'Frontend Wizard',  icons: ['icon-html', 'icon-css'], avatar:'Amarna_Miller'},
        ]
      };
    }
  };
  </script>
  
  <style>
  .cover{
    width: 1920px;
    height: 960px;
    background: rgba(0, 161, 198, 0.05);
    margin-left: 50px;
  }
  @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;700&family=IBM+Plex+Sans:wght@400;600&display=swap');
  </style>