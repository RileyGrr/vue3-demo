<template>
    <div>VModel
        <p>{{name}}{{age}}</p>
        <user-info v-model:age="age" v-model:name="name"></user-info>
    </div>
</template>
<script>
import {reactive, toRefs} from 'vue'
import UserInfo from './userInfo.vue'

export default {
    name: 'VModel',
    components:{
        UserInfo
    },
    setup(){
        const state = reactive({
            name: "双越",
            age: 20,
        })

        return toRefs(state)
    }
}
</script>