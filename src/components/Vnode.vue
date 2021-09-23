<template>
    <h1>vnode</h1>
    <img :src="getImgUrl('logo.png')" alt="" />
</template>
<script setup lang="ts">
import { getImgUrl } from '../utils/index'
console.log(getImgUrl('logo.png'))
const a = { name: 'xa' }
const p = new Proxy(a, {
    get(t, k) {
        console.log(t, k)
    },
    set(t, k, v) {
        console.log(t, k, v)

        return true
    },
})

console.log(a.name, p)
</script>
<style></style>
