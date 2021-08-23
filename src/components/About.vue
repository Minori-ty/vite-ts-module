<template>
    <h1>{{ TitleInfo.value }}</h1>
    <div v-for="item in items" :key="item.id">{{ item.name }}</div>
    <div>{{ doubleCounter }}</div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import type { Todo, TitleInfo } from '../type/type'
import { useStore } from 'vuex'
import { key } from '../store'

defineProps({
    TitleInfo: {
        type: Object as PropType<TitleInfo>,
        required: true,
    },
})
const items = [] as Todo[]
const store = useStore(key)

items.push({
    id: 1,
    name: 'vue3',
    completed: false,
})

const doubleCounter = computed((): number => store.state.counter * 2)
</script>

<style scoped></style>
