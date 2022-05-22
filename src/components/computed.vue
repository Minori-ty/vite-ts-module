<template>
    <h1>computed</h1>
    <div>{{ total }}</div>
    <div>{{ total }}</div>
    <div>{{ total }}</div>
    <div>{{ fn() }}</div>
    <div>{{ fn() }}</div>
    <div>{{ fn() }}</div>
    <div>{{ fn() }}</div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
const x = ref(5)
const y = ref(6)
const total = computed(() => {
    console.log('computed')
    return x.value + y.value
})
const fn = () => {
    console.log('fn')
    return x.value + y.value
}
</script>
<style scoped></style>
