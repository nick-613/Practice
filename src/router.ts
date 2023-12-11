import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
const routes =[
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path:'/Casa',
        name: 'Casa',
        component:() => import('./components/Home.vue')
    },
    {
        path:'/Food',
        name: 'Food',
        component:() => import('./components/Food.vue')
    },
    {
        path:'/Travel',
        name: 'Travel',
        component:() => import('./components/Travel.vue')
    },
    {
        path:'/Movie',
        name: 'Movie',
        component:() => import('./components/Movie.vue')
    },
    {
        path:'/Music',
        name: 'Music',
        component:() => import('./components/Music.vue')
    },
    {
        path:'/Workout',
        name: 'Workout',
        component:() => import('./components/Workout.vue')
    },
    {
        path:"/Store",
        name: "Store",
        component:() => import('./components/Store.vue')
    },
    {
        path:"/Games",
        name: "Games",
        component:() => import('./components/Games.vue')
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {top: 0}
    }
})
export default router