<template>
    <h1>store</h1>
    <h2>{{ store.state.aboutModule.about }}</h2>
    <h1>{{ store.state.counter }}</h1>
    <button @click="dispatch">dispatch++</button>
    <button @click="commit">commit++</button>
</template>
<script setup lang="ts">
// import { useStore } from 'vuex'
// import { key, InitState } from '../store'
// const store = useStore<InitState>(key)

//useStore不再从vuex中导入，而是使用自己构建的新的useStore函数
import { useStore } from '../store'
const store = useStore()
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
    store.commit('homeModule/add')
    store.commit('aboutModule/add')
}
</script>
<style></style>
