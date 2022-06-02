<template>
    <h1>inject</h1>
    <h2>{{ count }}</h2>
    <h2>{{ length }}</h2>
</template>

<script lang="ts" setup>
import { inject, Ref } from 'vue'
import { countKey } from '../type/inject'
const count = inject(countKey) as Ref<number>
const length = inject<string>('length')
console.log(count.value)
</script>

<style></style>
