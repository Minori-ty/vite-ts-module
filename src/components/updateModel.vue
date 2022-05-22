<template>
    <h1>update Model</h1>
    <h2>{{ count }}</h2>
    <button @click="fn">点击</button>
</template>
<script setup lang="ts">
defineProps<{
    count: number
}>()
const emits = defineEmits<{
    (e: 'update:count', data: number): void
}>()
const fn = () => {
    emits('update:count', 1)
}
</script>
<style scoped></style>
