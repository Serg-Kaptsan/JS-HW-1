
const { createApp } = Vue

createApp({
    data(){
      return {
        avalaibleCount:5,
        orderedCount:0,
        orderCheck: false
      }  
    },
    methods:{
        addProduct(){
            if(this.avalaibleCount>0){
                this.avalaibleCount --;
                this.orderedCount ++;
            }
            else{
                this.orderCheck = !this.orderCheck;
            }
        },
        removeProduct(){
            if(this.orderedCount>0){
                this.avalaibleCount ++;
                this.orderedCount --;
            }
            else{
                this.orderCheck = !this.orderCheck;
            }           
        }    
    }
}).mount('#app')
