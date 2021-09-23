<template>
    <h1>store</h1>
    <h2>{{ $store.state.counter }}</h2>
    <h1>{{ $store.state.homeModule.index }}</h1>
    <button @click="dispatch">dispatch++</button>
    <button @click="commit">commit++</button>
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
import { key } from '../store'
const store = useStore(key)
const dispatch = () => {
    const res = store.dispatch('request')
    res.then(res => {
        console.log('请求成功', res)
    }).catch(error => {
        console.log(error)
    })
}
const commit = () => {
    store.commit('add', 1)
}
</script>
<style></style>
