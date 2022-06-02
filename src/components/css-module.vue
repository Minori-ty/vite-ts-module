<template>
    <div :class="$style.wrap">module-style</div>
    <div :class="AppStyle.ss">class-module-style</div>
</template>
<script lang="ts" setup>
import AppStyle from '../assets/css/App.module.css'
</script>

<style module lang="scss">
$color: red;
.wrap {
    width: 200px;
    color: $color;
}
</style>
