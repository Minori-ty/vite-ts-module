<template>
    <h1>defineProps</h1>
    <h2>{{ msg }}</h2>
</template>
<script setup lang="ts">
defineProps({
    msg: {
        type: String,
        default: 'xx',
    },
})
</script>
<style></style>
