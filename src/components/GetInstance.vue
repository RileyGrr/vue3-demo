<template>
    <div>
    </div>
</template>
<script>
import {getCurrentInstance, onMounted, reactive, toRefs} from 'vue'


export default {
    name: 'VModel',
    data(){
        return {
            a:1,
            b:2
        }
    },  
    setup(){
        const instance = getCurrentInstance()
        const state = reactive({
            name: "双越",
            age: 20,
        })
        onMounted(()=>{
            console.log(this,instance.data.a)
        })
        return toRefs(state)
    },
    mounted(){
        console.log(this.a,'---------')
    }
}
</script>