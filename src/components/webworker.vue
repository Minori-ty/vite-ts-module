<template>
    <h1>webworker</h1>
    <h1>count: {{ count }}</h1>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import MyWorker from '../worker/webworker?worker'
let count = ref(0)
const worker = new MyWorker()
worker.onmessage = e => {
    console.log('update webworker ', e.data)
    count.value = e.data
}
</script>
<style scoped></style>
