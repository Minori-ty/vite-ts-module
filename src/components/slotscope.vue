<template>
    <h1>slot</h1>
    <template v-for="(item, index) in arr">
        <slot :item="item" :index="index" name="center"></slot>
    </template>
</template>
<script setup lang="ts">
defineProps({
    left: {
        type: String,
    },
    right: {
        type: String,
    },
    arr: {
        type: Array,
    },
})
</script>
