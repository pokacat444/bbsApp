import { createRouter, createWebHistory } from "vue-router";
import Home from './views/homeView.vue'
import Test from './views/testView.vue'

const routes = [
    {path:'/', name:'Home', component:Home},
    {path:'/test', name:'Test', component:Test},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router