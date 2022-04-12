<template>
    <h1>defineEmits</h1>
    <button @click="fn">defineEmits</button>
</template>
<script setup lang="ts">
interface emitType {
    (e: 'emits', data: number): void
    (e: 'ws', data: string): void
}

const emits = defineEmits<emitType>()

const fn = () => {
    emits('emits', 27)
}
</script>
<style></style>
