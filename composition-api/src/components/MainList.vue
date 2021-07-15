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
  <button @click="stop()">Stop Watch</button>
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
    const divElement = ref(null);

    const show = () => {
      disable.value = !disable.value;
    };

    const stop = watchEffect(
      () => {
        console.log(disable.value);
        console.log(divElement.value);
      },
      {
        onTrigger(e) {
          console.log(e, "sdsdsdsdsd");
          
        },
      }
    );

    return { disable, divElement, show, stop };
  },
};
</script>
<style scoped>
.main {
  position: relative;
}
</style>
