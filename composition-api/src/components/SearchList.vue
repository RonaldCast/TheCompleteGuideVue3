<template>
     <input placeholder="search" v-model="search"/>
</template>
<script>
import useListTask from "../context/useListTask.js" 

export default {
    setup() {
        const {search} = useListTask; 
        return {search}
    },
}
</script>