<template>
    <div class="box">
        <h1>defineProps</h1>
        <h2>{{ msg }}</h2>
        <h2>{{ vue }}</h2>
        <h2>
            {{ `from: name: ${form.name} ---- age: ${form?.age}` }}
        </h2>
    </div>
</template>
<script setup lang="ts">
// import { PropType } from 'vue'
interface Props {
    msg: string
    form: Form
    vue?: string
}

interface Form {
    name: string
    age: number
}

withDefaults(defineProps<Props>(), {
    vue: 'defineProps的默认值',
})
// console.log(props)

// defineProps({
//     msg: {
//         type: String,
//         required: true,
//     },
//     form: {
//         type: Object as PropType<Form>,
//         required: false,
//         default() {
//             return {
//                 age: 99999,
//             }
//         },
//     },
// })
</script>
