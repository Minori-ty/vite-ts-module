<template>
    <h1>store</h1>
    <h2>{{ aboutModule }}</h2>
    <h1>{{ counter }}</h1>
    <h1>{{ $store.state.homeModule }}</h1>
    <button @click="dispatch">dispatch++</button>
    <button @click="commit">commit++</button>
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
import { key } from '../store'
import { Modules } from '../store/index.d'
import { computed } from 'vue'
const store = useStore<Modules>(key)

//useStore不再从vuex中导入，而是使用自己构建的新的useStore函数

// import { useStore } from '../store'
// const store = useStore()
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
const aboutModule = computed((): string => store.state.aboutModule.about)
const counter = computed((): number => store.state.counter)
</script>
