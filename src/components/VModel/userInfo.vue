<template>
    <div>
        <!-- 子组件更新父组件的值 -->
        <input type="text" :value="name" @input="$emit('update:name',$event.target.value)">
        <input type="text" :value="age"  @input="$emit('update:age',$event.target.value)">
    </div>
</template>
<script>


export default {
    name: 'userInfo',
    props:{
        name:String,
        age: Number,
    },
    setup(){

    }
}
</script>