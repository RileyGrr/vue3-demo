<template>
    <div>
        <!-- <p v-for="(item, index) in classObj" :key="index"><span class="left">{{ item.class}}</span><span class="right" @click="add()">加入购物车</span></p> -->

        <p>pinia111
            <span>DSADAS</span>
        </p>
    </div>
    
  </template>
  
  <script>
        import {getCurrentInstance, onMounted, reactive, toRefs} from 'vue'


        export default {
            name: 'VModel', 
            setup(){
                const instance = getCurrentInstance()
                const state = reactive({
                   classObj:[
                    {
                        class: '商品1',
                        price:'10',
                        unit: '元'
                    },
                    {
                        class: '商品2',
                        price:'15',
                        unit: '元'
                    },
                    {
                        class: '商品3',
                        price:'20',
                        unit: '元'
                    },
                   ]
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
  
  <style lang="scss">
        p {
            color: red;
            span {
                color: blue;
            }
        }
  </style>
  