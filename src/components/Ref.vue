<template>
    <h1>ref</h1>
</template>
<script lang="ts" setup>
const fn = () => {
    console.log('-----------子组件的方法')
}
const count = 0
defineExpose({ fn, count })
</script>
