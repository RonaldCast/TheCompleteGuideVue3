<template>
  <h1>Component in Depth</h1>
  <h2>Emite validate</h2>
  <LoginForm @handler-form="getData" />
  <hr />
  <h2>Emite validate</h2>
  <PersonalForm 
   v-model:name.capitalize="name"
   v-model:surname="surname" />
  {{ name }} {{ surname }}
  <h2>Provider / inject</h2>
  <ComponentParent />
</template>

<script>
import LoginForm from "./components/emitValidate/LoginForm.vue";
import PersonalForm from "./components/v-modelArguments/PersonalForm.vue";
import ComponentParent from "./components/Provider/componentParent.vue";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    LoginForm,
    PersonalForm,
    ComponentParent,
  },

  setup() {
    const name = ref("");
    const surname = ref("");

    const getData = (data) => {
      console.log(data);
    };

    return { name, surname, getData };
  },
};
</script>
