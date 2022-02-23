<template>
    <div class="box">
        <h1>watch</h1>
        <button @click="fn">改变reactive的值</button>
    </div>
</template>
<script setup lang="ts">
import { reactive, watch } from 'vue'
const person = reactive({
    name: 'zs',
    age: 18,
    friends: {
        name: 'xx',
    },
})
const fn = () => {
    person.friends.name += 's'
    // person.age += 1
}
watch(
    () => {
        return { ...person }
    },
    (newValue, oldValue) => {
        console.log(newValue, oldValue)
    },
    {
        deep: true,
    }
)
watch(
    () => person.name,
    (newValue, oldValue) => {
        console.log(newValue, oldValue)
    }
)
watch([], () => {
    console.log(2)
})
</script>
