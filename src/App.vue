<template>
    <div :class="$style.mo">module-style</div>
    <div :class="cs.ss">class-module-style</div>
    <router-view></router-view>
</template>
<script lang="ts" setup>
import cs from './assets/css/App.module.css'
</script>
<!-- <i18n>
{
    "en":{
        "language":"language",
        "hello":"hello word"
    },
    "zh":{
        "language":"语言",
        "hello":"你好！世界！"
    },
}
</i18n> -->
<style module lang="scss">
$color: red;
.mo {
    color: $color;
    width: 200px;
}
</style>
