<script>
function add(a,b){
   return a+b
}
</script>
<script setup>
import {ref} from 'vue'
import Child from './child.vue'
import Child2 from './child2'
import Child3 from './child3'

const countRef = ref(100)
const child3Except = ref(null)
function clibtn(){
   countRef.value++
   console.log('dianji')
}
console.log(add(10,6))
// 顶级变量 可直接用于 template

function changeC(){
   console.log('点击点击',child3Except.value.a)
}

function deleteaaa(data){
   console.log('deleteBtn', data)
}

</script> 
<template><!--  -->
   <P @click="clibtn">{{countRef}}当时的嘎达嘎嘎大苏打</P>
   <Child></Child>
   <Child2 :name="'陈俊伟'" :age="countRef" @changeS="changeC" @delete="deleteaaa"></Child2>
   <Child3 ref="child3Except"></Child3>
   
</template>
