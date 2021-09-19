<template>
    <h1>组件</h1>
    <img :src="getImgUrl('icons/logo.png')" alt="" />
    <h1>{{ $filters.FormDate('123454') }}</h1>
    <img src="../assets/images/m-picture/about-header.jpg" />
    <img src="../assets/images/picture/about.jpg" />
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue'
import Contact from './Contact.vue'
import getImgUrl from '../utils'
const a = ref<InstanceType<typeof Contact>>()
console.log(a.value?.fn)
import request from '../request'
import type { Data } from '../request/data.d'
// import.meta.env.VITE_BASE_URL
console.log(import.meta.env.VITE_BASE_URL)
request
    .get<Data>({
        url: '/api/get',
        method: 'get',
    })
    .then(res => {
        console.log(res.data)
    })
const $filters =
    getCurrentInstance()?.appContext.config.globalProperties.$filters ?? null
const FormDate = $filters?.FormDate ?? null
var day = Date.UTC(2021, 8, 19)
console.log(FormDate(day))
</script>
<style scoped></style>
