<template>
  <form @submit.prevent="add" class="form-add">
    <div >
      <label>Description:</label>
      <br />
      <input v-model.trim="description" />
    </div>
    <br />
    <div >
      <label>Select Priority:</label>
      <br />
      <select v-model="priority">
        <option v-for="pr in priorities" :value="pr" :key="pr">{{ pr }}</option>
      </select>
    </div>
    <br />
    <div>
      <button type="submit">Add</button>
    </div>
  </form>

</template>
<script>

import useListTask from "../context/useListTask.js" 

export default {
  setup() {
    
    const { description, priority, add, priorities} = useListTask

   return { description, priority, add, priorities}


     /*   const formData = reactive({
          description: "",
          priority: "Medium",
        });
        const priorities = ref(["High", "Medium", "low"]);
        const search = ref("");

        const list = ref([]);

        const add = () => {
          if (formData.description === "") {
            return;
          }
          const { description, priority } = formData;
          list.value.push({
            description,
            priority,
          });
          formData.description = "";
          formData.priority = "Medium";
        };

        const listFilter = computed(() =>
          list.value.filter((e) =>
            e.description.toLowerCase().includes(search.value.toLowerCase())
          )
        );

        return { ...toRefs(formData), priorities, add, listFilter,search };
        */
  },
};
</script>
<style scoped>
  .form-add{
      width: 25%;
      min-width: 300px;
      max-width: 400px;
      height: 200px;
      background: rgb(2, 209, 140);
      padding: 20px;
      position: absolute;
      top:50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      margin: 0 auto;

  }

</style>
