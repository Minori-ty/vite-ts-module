<template>
    <!-- <h1>App</h1> -->
    <About :TitleInfo="{ value: 'ss', color: 'red' }"></About>
    <!-- <div>{{ $store.state.counter }}</div> -->
    <router-view></router-view>
</template>

<script setup lang="ts">
import About from './components/About.vue'
import request from './request'
import type { Data } from './request/data.d'
// import.meta.env.VITE_BASE_URL
console.log(import.meta.env.VITE_BASE_URL)
request
    .post<Data>({
        url: '/api/post',
        method: 'get',
    })
    .then(res => {
        console.log(res.data)
    })
</script>

<style scoped></style>
