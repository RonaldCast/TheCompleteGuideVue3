<template>
  <div class="main" ref="divElement">
    <teleport to="body">
      <FormAddList v-if="disable" />
    </teleport>
  </div>
  <button @click="show">Show/Hide</button>
  <br />
  <SearchList />
  <DisplayList />
</template>

<script>
import DisplayList from "./DisplayList.vue";
import SearchList from "./SearchList.vue";
import FormAddList from "./FormAddList.vue";

import { onMounted, watchEffect, ref } from "vue";
export default {
  components: {
    FormAddList,
    DisplayList,
    SearchList,
  },
  setup() {
    const disable = ref(false);
    const divElement = ref(null)

    const show = () => {
      disable.value = !disable.value;
    };

    watchEffect(()=>{
        console.log(divElement.value)
    })

    return { disable, divElement, show };
  },
};
</script>
<style scoped>
.main {
  position: relative;
}
</style>
