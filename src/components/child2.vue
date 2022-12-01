<script setup>
import { defineProps,defineEmits } from 'vue';
// 定义属性 
const props = defineProps({
    name:String,
    age:Number,
})
// 定义事件
const emit = defineEmits(['changeS', 'delete'])

function deleteHandle(){
    emit('delete','删除')
}
</script>
<template>
    <p>child2,name:{{props.name}},age:{{props.age}}</p>
    <button @click="$emit('changeS')">点击</button>
    <button @click="deleteHandle"></button>
</template>