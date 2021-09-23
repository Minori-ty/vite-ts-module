<template>
    <h1 ref="h1">ref</h1>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
const fn = () => {
    console.log('子组件的方法')
}
const h1 = ref()
onMounted(() => {
    console.log(h1.value)
})
</script>

<script lang="ts">
export default {}
</script>
