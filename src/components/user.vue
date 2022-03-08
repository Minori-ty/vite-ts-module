<template>
    <h1>user组件</h1>
    <p>
        <router-link to="/">home</router-link>
    </p>
    <router-link to="/user/goods1">goods1</router-link>
    <router-link to="/user/goods2">goods2</router-link>

    <button @click="push">goods2</button>
    <button @click="back">back</button>
    <router-view></router-view>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
console.log(router)

const push = () => {
    router.push({
        path: '/user/goods2',
        query: {
            id: 1,
            title: '标题',
        },
    })
}
const back = () => {
    router.go(-1)
}
</script>
<style></style>
