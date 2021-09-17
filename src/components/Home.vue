<template>
    <h1>组件</h1>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Contact from './Contact.vue'

const a = ref<InstanceType<typeof Contact>>()
console.log(a.value?.fn)
console.log(1)
</script>
<style scoped></style>
