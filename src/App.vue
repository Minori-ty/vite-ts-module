<template>
    <div :class="$style.wrap">module-style</div>
    <div :class="AppStyle.ss">class-module-style</div>
    <router-view></router-view>
</template>
<script lang="ts" setup>
import AppStyle from './assets/css/App.module.css'
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
.wrap {
    color: $color;
    width: 200px;
}
</style>
