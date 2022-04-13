<template>
    <button @click="send">发送请求</button>
    <button @click="stop">取消请求</button>
    <button @click="message = {}">clear</button>
    <div>{{ t }}</div>
    <div>{{ message }}</div>
</template>
<script setup lang="ts">
import axios from 'axios'
import { shallowRef, ref } from 'vue'
import MyWorker from '../worker/webworker?worker'
let t = ref(0)
const worker = new MyWorker()
worker.onmessage = e => {
    console.log(e.data)
    t.value = e.data
}

// document.body.style.backgroundColor = 'red'
const message = shallowRef({})
let cancel: null | (() => void)
axios.interceptors.request.use(config => {
    if (typeof cancel === 'function') {
        cancel()
        console.log('请求被取消了')
    }
    config.cancelToken = new axios.CancelToken(c => (cancel = c))
    return config
})

axios.interceptors.response.use(
    response => {
        cancel = null
        return response
    },
    error => {
        if (axios.isCancel(error)) {
            return new Promise(() => {})
        } else {
            cancel = null
            return Promise.reject(error)
        }
    }
)
const send = async () => {
    try {
        const data = await axios.get(
            'https://api.copymanga.org/api/v3/search/comic',
            {
                params: {
                    offset: 30,
                    platform: 1,
                    limit: 20,
                    q: '辉夜大小姐',
                    q_type: '',
                    _update: true,
                },
            }
        )
        message.value = data
        cancel = null
    } catch (error) {
        console.log(error)
    }
}
const stop = () => {
    if (typeof cancel === 'function') {
        cancel()
        console.log('进来了')
    }
}
</script>
<style scoped></style>
