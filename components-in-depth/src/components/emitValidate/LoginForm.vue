<template>
  <form @submit.prevent="submit">
    <input
      v-model="username"
      placeholder="user name"
    >
    <input
      v-model="password"
      type="password"
      placeholder="password"
    >
    <button type="submit">
      Submit
    </button>
  </form>
</template>
<script>
import { ref } from "vue";

export default {

  emits: {
    handlerForm:(data) =>{
      if(!(data?.username && data?.password)){
          return false
      }
   
      return true;
    }
  },
  setup(props, context) {
    const username = ref("");
    const password = ref("");

    const submit = () => {
      context.emit("handlerForm", {username: username.value, password: password.value});
    };

    return { username, password, submit };
  },
};
</script>
