<template>
    <h1>inject</h1>
    <h2>{{ count }}</h2>
    <h2>{{ length }}</h2>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
const count = inject('count')
const length = inject('length')
</script>

<style></style>
