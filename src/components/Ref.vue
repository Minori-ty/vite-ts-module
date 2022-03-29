<template>
    <h1>ref</h1>
</template>
<script lang="ts" setup>
export interface RefType {
    count: number
    fn(): void
}
const count = 0

const fn = () => {
    console.log('-----------子组件的方法-----------')
}

defineExpose({ fn, count })
</script>
