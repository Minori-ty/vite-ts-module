<template>
    <div class="box">
        <h1>defineEmits</h1>
        <button @click="emit">defineEmits</button>
    </div>
</template>
<script setup lang="ts">
interface emitType {
    (e: 'emits', data: number): void
    (e: 'ws', data: string): void
}

const emits = defineEmits<emitType>()

const emit = () => {
    emits('ws', '27')
}
</script>
<style></style>
