<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div :style="{ background: color }">
    <FormData v-model:name="name" v-model:age="age" v-model:color="color" />
  </div>

  {{ name }}
</template>

<script>
import FormData from "./components/FormData.vue";
import { ref } from "vue";

export default {
  name: "App",

  components: {
    FormData,
  },
  setup() {
    const name = ref("Jhon");
    const age = ref(6);
    const color = ref("#41b883");

    return { name, age, color };
  },
};
</script>
