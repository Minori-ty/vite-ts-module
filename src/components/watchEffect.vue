<template>
    <h1>watchEffect</h1>
    <h2>{{ age }}</h2>
    <button @click="add">+1</button>
</template>
<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import request from '../request'
const age = ref(18)
const add = () => {
    age.value++
}

watchEffect(onInvalidata => {
    //在这里发送网络请求
    const timer = setTimeout(() => {
        console.log('网络请求成功')
    }, 2000)

    onInvalidata(() => {
        //监听操作改变时，取消网络请求
        clearTimeout(timer)
        request.concel()
        console.log('请求取消', age.value)
    })
    console.log('value', age.value)
})
</script>
<style></style>
