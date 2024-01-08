<template>
    <h1>具名插槽slot</h1>
    <div id="left">
        <slot name="left"> </slot>
    </div>
    <slot name="center"> </slot>
    <div id="right">
        <slot name="right"> </slot>
    </div>
</template>

<style>
#left {
    background-color: blue;
}
#right {
    background-color: red;
}
</style>
