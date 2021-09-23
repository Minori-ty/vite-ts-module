<template>
    <h1>defineEmits</h1>
    <button @click="emit">defineEmits</button>
</template>
<script setup lang="ts">
interface emitType {
    (e: 'emits', data: number): void
}
const emits = defineEmits<emitType>()
const emit = () => {
    emits('emits', 27)
}
</script>
<style></style>
