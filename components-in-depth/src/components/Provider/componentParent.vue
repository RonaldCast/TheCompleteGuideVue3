<template>
  <div>
    <ComponentChild />
    <input v-model="description" />
    <button @click="add">Add</button>
  </div>
  <ul>
    <li v-for="task in listTask" :key="task.id">
      {{ task }}
    </li>
  </ul>
</template>
<script>
import { ref, provide, computed } from "vue";
import ComponentChild from "./componentChild.vue";

export default {
  components: {
    ComponentChild,
  },

  async setup() {
    const description = ref("");
    const listTask = ref([]);

    provide(
      "length",
      computed(() => listTask.value.length)
    );
    const add = () => {
      listTask.value.push(description.value);
      description.value = "";
    };
    return { description, listTask, add };
  },
};
</script>