<template>
    <input type="text" v-model="inv" />
    <h1>{{ inv }}</h1>
    <span class="iconify" data-icon="material-symbols:search"></span>
    <span class="iconify" data-icon="akar-icons:search"></span>
    <router-view></router-view>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
let inv = ref('')
</script>
