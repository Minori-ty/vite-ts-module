<template>
    <h1>watch</h1>
    <h2>{{ data }}</h2>
    <button @click="person.age++">data++</button>
    <button @click="fn">改变reactive的值</button>
</template>
<script setup lang="ts">
import { reactive, watch, ref } from 'vue'
const person = reactive({
    name: 'zs',
    age: 18,
    friends: {
        name: 'xx',
    },
})
const data = ref(123)
const fn = () => {
    person.friends.name += 's'
    // person.age += 1
}
watch(
    () => {
        return { ...person }
    },
    (newValue, oldValue) => {
        // alert('改变了')
        console.log(newValue, oldValue)
    },
    {
        deep: true,
    }
)
watch(
    () => person.friends.name,
    (newValue, oldValue) => {
        // alert('改变了')
        console.log(newValue, oldValue)
    }
)
watch([], () => {
    console.log(2)
})
watch(data, () => {
    alert('改变了')
})
</script>
