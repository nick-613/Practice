import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
const routes =[
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path:'/Casa',
        name: 'Casa',
        component:() => import('./views/Home.vue')
    },
    {
        path:'/Food',
        name: 'Food',
        component:() => import('./views/Food.vue')
    },
    {
        path:'/Travel',
        name: 'Travel',
        component:() => import('./views/Travel.vue')
    },
    {
        path:'/Movie',
        name: 'Movie',
        component:() => import('./views/Movie.vue')
    },
    {
        path:'/Music',
        name: 'Music',
        component:() => import('./views/Music.vue')
    },
    {
        path:'/Workout',
        name: 'Workout',
        component:() => import('./views/Workout.vue')
    },
    {
        path:"/Store",
        name: "Store",
        component:() => import('./views/Store.vue')
    },
    {
        path:"/Games",
        name: "Games",
        component:() => import('./views/Games.vue')
    },
    {
        path:"/About",
        name: "About",
        component:() => import('./views/About.vue')
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