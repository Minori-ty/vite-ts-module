<template>
    <h1>组件</h1>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    name: 'Contact',
    setup() {
        const fn = () => {
            console.log(1)
        }
        return {
            fn,
        }
    },
})
</script>

<style></style>
