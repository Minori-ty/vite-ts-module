<template>
    <h1>defineProps</h1>
    <h2>{{ prop.form }}</h2>
    <h2>{{ prop.vue }}</h2>
    <h2>
        {{ `from: name: ${form.name} ---- age: ${form?.age}` }}
    </h2>
    <button @click="handle">触发emt</button>
</template>
<script setup lang="ts">
// import { PropType } from 'vue'
interface Props {
    msg: string
    form: Form
    vue?: string
    emt: (data: number) => void
}

interface Form {
    name: string
    age?: number
}
const handle = () => {
    prop.emt(235)
}
const prop = withDefaults(defineProps<Props>(), {
    vue: 'defineProps的默认值',
    form: () => {
        return {
            name: '',
            age: 78,
        }
    },
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
