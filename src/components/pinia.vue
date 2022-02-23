<template>
    <div class="box">
        <h1>count:{{ count }}</h1>
        <h1>computed:{{ computed }}</h1>
        <h2>{{ url }}</h2>
        <button @click="fn">add</button>
        <button @click="actions">actions</button>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import usePinia from '../pinia'
const { count, url, computed } = storeToRefs(usePinia())
const { add, get } = usePinia()
const fn = () => {
    add()
}
const actions = async () => {
    const data = await get()
    console.log(data)
}
</script>

<style scoped></style>
