<template>
  <ul>
    <li v-for="task in listFilter">
      {{ task.description }} => {{ task.priority }}
    </li>
  </ul>
</template>

<script>
import useListTask from "../context/useListTask.js" 
export default {
  setup() {

      const {listFilter, description} = useListTask;

      return {listFilter,description}
  },
};
</script>