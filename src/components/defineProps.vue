<template>
    <h1>defineProps</h1>
    <h2>{{ msg }}</h2>
    <h2>{{ form?.age }}</h2>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
interface Form {
    age: number
}
// const props = defineProps<{
//     msg: string
//     form?: Form
// }>()

defineProps({
    msg: {
        type: String,
        required: true,
    },
    form: {
        type: Object as PropType<Form>,
        required: false,
        default() {
            return {
                age: 99999,
            }
        },
    },
})
</script>
