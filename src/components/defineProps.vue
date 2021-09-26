<template>
    <h1>defineProps</h1>
    <h2>{{ msg }}</h2>
    <h2>{{ form }}</h2>
</template>
<script setup lang="ts">
type Form = {
    age: number
}
defineProps<{
    msg: string
    form: Form
}>()
</script>
<style></style>
