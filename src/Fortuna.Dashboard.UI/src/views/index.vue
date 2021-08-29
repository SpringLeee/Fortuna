<template>
  <div>
    <h3>index</h3>

    <h3>{{ count }}</h3>

    <input v-model="value"/>

    <button @click="add()">Ok</button>

    <button @click="add2()">Ok2</button>

  </div>
</template> 

<script lang="ts">

import {ref,reactive,onMounted} from 'vue'  
export default {  

  setup() { 
    
    onMounted(()=>{
      
      console.log("onMounted...") 

    }) 

     console.log("onCreated...") 


    let count = ref(0) 
    let value = ref("aaa") 

    let add = () => {  
      console.log(value.value)
    }

    let add2 = () => {  
      value.value = value.value + "0"
      console.log(value.value)
    }

    return {count,add,add2,value}
  }
}
</script>

