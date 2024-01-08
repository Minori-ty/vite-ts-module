<template>
    <input type="text" v-model="data" />
    <h1>{{ data }}</h1>
    <span class="iconify" data-icon="material-symbols:search"></span>
    <span class="iconify" data-icon="akar-icons:search"></span>
    <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

/** 测试 */
const data = ref('')
</script>

<style scoped lang="scss">
.div {
    padding: 100px;
    width: 100px;
    font-size: 14px;
}
</style>
