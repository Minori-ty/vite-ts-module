<template>
    <div class="box">
        <cssModule></cssModule>
    </div>
    <div class="box">
        <tree></tree>
    </div>
    <div class="box">
        <pinia />
    </div>
    <div class="box">
        <store />
    </div>

    <router-link to="/user">user</router-link>
    <h1>{{ $filters.FormDate() }}</h1>

    <button @click="evebtbus">触发evebtbus</button>
    <div class="box">
        <inject />
        <button @click="add">count++</button>
        <button @click="push">修改数组</button>
    </div>

    <div class="box">
        <slotscope :arr="arr">
            <template #center="scoped">
                <button>{{ scoped.item }}</button>
            </template>
        </slotscope>
    </div>

    <div class="box">
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
    </div>

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
        <Table :data="datas.data" :tableTitle="tableTitle">
            <template #name="{ value }">
                <el-button type="primary">{{ value }}</el-button>
            </template>
        </Table>
    </div>
    <div class="box">
        <Son ref="RefDom" />
    </div>
    <div class="box">
        <defineEmits @emits="emit" />
    </div>
    <div class="box">
        <defineProps
            msg="父组件传给子组件的数据"
            :form="{ name: 'vue', age: 88 }"
        />
    </div>
    <div class="box">
        <eventBus />
    </div>
    <div class="box">
        <watchEffect />
    </div>
    <div class="box">
        <watch />
    </div>
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
import tree from './tree'
import Test from './dynamicSlot.vue'
import Table from './自己封装的动态插槽.vue'
import pinia from './pinia.vue'
import cssModule from './css-module.vue'
import axios from 'axios'
import { countKey } from '../type/inject'
import Mock from 'mockjs'

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

const tableTitle: TableType.Title = [
    {
        prop: 'id',
        label: '序号',
        slotName: 'id',
    },
    {
        prop: 'number',
        label: '机库编号',
        slotName: 'number',
    },
    {
        prop: 'type',
        label: '机库型号',
        slotName: 'type',
    },
    {
        prop: 'regin',
        label: '所在地点',
        slotName: 'regin',
    },
    {
        prop: 'warnDate',
        label: '报警时间',
        slotName: 'warnDate',
    },
    {
        prop: 'subject',
        label: '报警项目',
        slotName: 'subject',
    },
    {
        prop: 'resolveDate',
        label: '受理时间',
        slotName: 'resolveDate',
    },
    {
        prop: 'isResolve',
        label: '是否解决',
        slotName: 'isResolve',
    },
    {
        prop: 'operation',
        label: '操作',
        slotName: 'operation',
    },
]

const datas: { data: TableType.Data } = Mock.mock({
    'data|30': [
        {
            id: '00' + 1,
            number: '18051',
            type: 'JKZ-8-1',
            regin: Mock.Random.county(true),
            warnDate: Mock.Random.date('yyyy-MM-dd hh:mm'),
            subject: '天气短信报警',
            resolveDate: Mock.Random.date('yyyy-MM-dd hh:mm'),
            isResolve: '已解决',
        },
    ],
})
</script>
