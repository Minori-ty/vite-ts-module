<template>
    <!-- <h1>组件</h1> -->
    <About :TitleInfo="{ value: 'ss', color: 'red' }"></About>
    <!-- <div>{{ $store.state.counter }}</div> -->
    <router-view></router-view>
</template>

<script setup lang="ts">
import About from './components/About.vue'
import.meta.env.VITE_BASE_URL
</script>

<style scoped></style>
