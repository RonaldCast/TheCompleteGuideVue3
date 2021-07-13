<template>
    <div>
        <label>Name: </label>
        <input :value="name" @input="(event) => $emit('update:name', event.target.value)"/>
    </div>
    
     <div>
        <label>Age: </label>
        <input :value="age" type="number" min="0"  @input="(event) => $emit('update:age', event.target.value)"/>
    </div>

     <div>
        <input :value="color" type="color"  @input="(event) => $emit('update:color', event.target.value)"/>
    </div>
</template>
<script>

export default {
props:['name', 'age', 'color'],

}
</script>
