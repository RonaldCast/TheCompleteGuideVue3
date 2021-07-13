<template>
 <h1>Counter {{counter}}</h1>
 <p v-if="showMessage">The counter is greater than 10 </p>
 <button @click="sum">+</button>
 <button @click="substract">-</button>

</template>

<script>

import {ref, computed, watch } from 'vue'
export default {
  name: 'App',

  setup(){
    const counter = ref(0)

    const sum = () => {
      counter.value++;
    }

    const substract = () =>{
      counter.value--;
    }

    const showMessage = computed(() => {
      return counter.value >= 10 
    })

    watch(counter, () => {
      console.log("hola")
    })

    return{ counter, sum, substract, showMessage}
  }
}
</script>

<style>

</style>
