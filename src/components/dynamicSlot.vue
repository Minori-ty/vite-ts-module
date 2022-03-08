<template>
    <!-- tableDate是传给el-table组件的属性 -->
    <!-- propList已经在definedProps中声明了,所以可以直接使用 -->
    <h1>动态插槽</h1>
    <el-table :data="tableData" style="width: 100%">
        <template v-for="propItem in propList" :key="propItem.prop">
            <el-table-column
                :prop="propItem.prop"
                :label="propItem.label"
                width="180"
            >
                <template #default="{ row }">
                    <slot :name="propItem.slotName" :row="row">
                        {{ row[propItem.prop] }}
                    </slot>
                </template>
            </el-table-column>
        </template>
    </el-table>
</template>
<script setup lang="ts">
interface TableData {
    date: string
    name: string
    address: string
}

interface PropData {
    prop: string
    label: string
    slotName: string
}

interface PropType {
    tableData: TableData[]
    propList: PropData[]
}

defineProps<PropType>()
</script>
<style scoped lang="scss"></style>
