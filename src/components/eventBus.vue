<template>
    <h1>eventBus</h1>
</template>
<script setup lang="ts">
import emitter from '../utils/eventbus'
emitter.on('eventbus', data => {
    console.log('监听到有人触发了eventbus', data)
})
</script>
