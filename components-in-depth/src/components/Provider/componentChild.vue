<template>
  <h3>Amount: {{amount}} </h3>  
</template>

<script>
import { inject } from "vue";
export default {
    setup(){
        const amount = inject("length")
        return {amount}


    }
}
</script>