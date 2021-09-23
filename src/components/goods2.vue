<template>
    <h1>goods2</h1>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const {
    query: { id, title },
} = route
console.log(id, title)
</script>
<style></style>
