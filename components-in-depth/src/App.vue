<template>
  <h1>Component in Depth</h1>
  <h2>Emite validate</h2>
  <LoginForm @handler-form="getData"  v-if="available" />
  <hr />
  <h2>Emite validate</h2>
  <PersonalForm v-model:name.capitalize="name" v-model:surname="surname" />
  {{ name }} {{ surname }}
  <h2>Provider / inject</h2>
  <ComponentParent />
  <button @click="show">Show</button>
</template>

<script>
//import LoginForm from "./components/emitValidate/LoginForm.vue";
import PersonalForm from "./components/v-modelArguments/PersonalForm.vue";
import ComponentParent from "./components/Provider/componentParent.vue";
import { ref, defineAsyncComponent } from "vue";

export default {
  name: "App",
  components: {
    LoginForm: defineAsyncComponent(() =>
      import("./components/emitValidate/LoginForm.vue")
    ),
    PersonalForm,
    ComponentParent
  },

  setup() {
    const name = ref("");
    const surname = ref("");
    const available = ref(false);

    const getData = (data) => {
      console.log(data);
    };

    const show = () => {
      available.value = !available.value;
    };

    return { name, surname, getData, available, show };
  },
};
</script>
