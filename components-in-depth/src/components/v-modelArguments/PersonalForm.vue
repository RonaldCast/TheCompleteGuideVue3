<template>
  <div>
    <label> Name: </label>
    <input
      :value="name"
      @input="handleName"
    >
  </div>
  <div>
    <label> Surname: </label>
    <input
      :value="surname"
      @input="(event) => $emit('update:surname', event.target.value)"
    >
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    nameModifiers: {
      type: Object,
      default: () => {
        return { capitalize: false };
      },
    },
    surname: {
      type: String,
      default: "",
    },
  },
  emits: ["update:name", "update:surname"],
  setup(props, context) {
    const capitalize = (value) =>
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

    const handleName = (event) => {
      let value = event.target.value;
      console.log(props.nameModifiers)
      if (props.nameModifiers.capitalize) {
        value = capitalize(value);
      }
      context.emit("update:name", value);
    };

    return { handleName };
  },
};
</script>
