import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/home.vue"
import Pinia from "../views/pinia.vue"

const routes = [
    {path:'/',name:"Home", component:Home},
    {path:'/Pinia',name:"Pinia", component:Pinia},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;