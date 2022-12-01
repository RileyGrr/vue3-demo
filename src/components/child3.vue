<script setup>
import {ref,defineExpose} from 'vue';
const a = ref('我是暴露属性')
const b = 200


defineExpose({
    a,b
})
</script>
<template>
    <div>{{a}}{{b}}</div>
</template>