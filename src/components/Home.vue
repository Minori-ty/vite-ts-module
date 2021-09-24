<template>
    <vnode />
    <store />
    <router-link to="/user">user</router-link>
    <h1>{{ $filters.FormDate() }}</h1>

    <button @click="evebtbus">触发evebtbus</button>

    <inject />
    <button @click="add">count++</button>
    <button @click="push">修改数组</button>

    <slotscope :arr="arr">
        <template #center="scoped">
            <button>{{ scoped.item }}</button>
        </template>
    </slotscope>

    <slots>
        <template #left>
            <h1>左</h1>
        </template>
        <template #center>
            <h1>中</h1>
        </template>
        <template #right>
            <h1>右</h1>
        </template>
    </slots>

    <Ref ref="RefDom" />
    <defineEmits @emits="emit" />
    <defineProps msg="父组件传给子组件的数据" />
    <eventBus />
    <watchEffect />
    <watch />
</template>

<script lang="ts" setup>
import {
    ref,
    getCurrentInstance,
    provide,
    computed,
    onMounted,
    readonly,
    defineAsyncComponent,
} from 'vue'
import emitter from '../utils/eventbus'
import inject from './inject.vue'
import Ref from './Ref.vue'
import defineEmits from './defineEmits.vue'
import defineProps from './defineProps.vue'
import eventBus from './eventBus.vue'
import watchEffect from './watchEffect.vue'
import watch from './watch.vue'
import vnode from './Vnode.vue'
import store from './store.vue'
import slots from './slots.vue'
const slotscope = defineAsyncComponent(() => import('./slotscope.vue'))

const RefDom = ref<InstanceType<typeof Ref>>()

onMounted(() => {
    console.log(RefDom.value?.fn)
})
const $filters =
    getCurrentInstance()?.appContext.config.globalProperties.$filters ?? null

var arr = ref([1, 2, 3, 4])
const push = () => {
    arr.value.push(1)
    console.log(arr.value.length)
}
provide(
    'length',
    computed(() => arr.value.length)
)

const count = ref(0)
provide('count', readonly(count))
const add = () => {
    count.value++
}

const evebtbus = () => {
    emitter.emit('eventbus', { age: 12 })
}

const emit = (data: number) => {
    console.log('接收到了子组件传过来的数据', data)
}
</script>
