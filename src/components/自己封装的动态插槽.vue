<template>
    <!-- 机库表格内容区开始 -->
    <table>
        <thead style="position: sticky; top: 0">
            <tr>
                <th v-for="item in tableTitle" :key="item.prop">
                    {{ item.label }}
                </th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="rowData in data" :key="rowData.id">
                <td
                    v-for="title in tableTitle"
                    :key="title.prop"
                    align="center"
                >
                    <slot :name="title.slotName" :value="rowData[title.prop]">
                        {{ rowData[title.prop] }}</slot
                    >
                </td>
            </tr>
        </tbody>
    </table>
    <!-- 机库表格内容区结束 -->
</template>
<script setup lang="ts">
defineProps<{
    tableTitle: TableType.Title
    data: TableType.Data
}>()
</script>
<style scoped lang="scss">
table {
    border-collapse: collapse;
    // margin-top: 20px;
    width: 100%;
    thead {
        th {
            background-color: gold;
            color: #fff;
            padding: 20px 10px;
        }
    }
    tbody {
        tr {
            td {
                padding: 10px 10px;
            }
            &:hover {
                background-color: #f5f7fa;
            }
        }
    }
}

.demo-pagination-block + .demo-pagination-block {
    margin-top: 10px;
}
.demo-pagination-block .demonstration {
    margin-bottom: 16px;
}
</style>
