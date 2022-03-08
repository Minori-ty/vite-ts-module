<template>
    <pinia />
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

    <div class="box">
        <Test :tableData="tableData" :propList="propList">
            <template #date="scope">
                <el-button type="success">{{ scope.row.date }}</el-button>
            </template>
            <template #name="scope">
                <el-button type="primary">{{ scope.row.name }}</el-button>
            </template>
        </Test>
    </div>

    <div class="box">
        <Table :data="tableData" :tableTitle="propList">
            <template #name="{ value }">
                <el-button type="primary">{{ value }}</el-button>
            </template>
        </Table>
    </div>
    <Son ref="RefDom" />
    <defineEmits @emits="emit" />
    <defineProps
        msg="父组件传给子组件的数据"
        :form="{ name: 'vue', age: 88 }"
    />
    <eventBus />
    <watchEffect />
    <watch />
</template>

<script lang="ts" setup>
import {
    ref,
    provide,
    computed,
    onMounted,
    readonly,
    defineAsyncComponent,
} from 'vue'
import emitter from '../utils/eventbus'
import inject from './inject.vue'
import Son from './Ref.vue'
import defineEmits from './defineEmits.vue'
import defineProps from './defineProps.vue'
import eventBus from './eventBus.vue'
import watchEffect from './watchEffect.vue'
import watch from './watch.vue'
import store from './store.vue'
import slots from './slots.vue'
import Test from './dynamicSlot.vue'
import Table from './自己封装的动态插槽.vue'
import pinia from './pinia.vue'
import axios from 'axios'
import { countKey } from '../type/inject'
// import axios from 'axios'

const slotscope = defineAsyncComponent(() => import('./slotscope.vue'))

interface sonData {
    fn: () => void
    count: number
}

const sonRef = ref<InstanceType<typeof Son> & sonData>()

onMounted(() => {
    console.log(sonRef.value?.$el)
})

var arr = ref([1, 2, 3, 4, 5, 6])
const push = () => {
    arr.value.push(1)
    console.log(arr.value.length)
}

provide(
    'length',
    computed(() => arr.value.length)
)
const count = ref<number>(0)
provide(countKey, readonly(count))

const add = () => {
    count.value++
}

const evebtbus = () => {
    emitter.emit('eventbus', { age: 12 })
}

const emit = (data: number) => {
    console.log('接收到了子组件传过来的数据', data)
}

async function fn() {
    const data = await axios.get('/api/get')
    console.log(data)
}
fn()
type data = { date: string; name: string; address: string }[]
const tableData: data = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Jack',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tem',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Eva',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Eva',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Eva',
        address: 'No. 189, Grove St, Los Angeles',
    },
]

const propList: {
    prop: 'date' | 'name' | 'address'
    label: string
    slotName: string
}[] = [
    {
        prop: 'date',
        label: 'Date',
        slotName: 'date',
    },
    {
        prop: 'name',
        label: 'Name',
        slotName: 'name',
    },
    {
        prop: 'address',
        label: 'Address',
        slotName: 'address',
    },
]
</script>
