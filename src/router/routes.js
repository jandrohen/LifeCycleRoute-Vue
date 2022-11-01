import {createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "ListPage" */'@/modules/pokemon/pages/ListPage')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "AboutPage" */'@/modules/pokemon/pages/AboutPage')
    },
    {
        path: '/pokemonid/:id',
        name: 'pokemon-id',
        props: ( route ) => {
            const id = Number(route.params.id);
            return isNaN(id) ? {id: 1} : {id}
        },
        component: () => import(/* webpackChunkName: "PokemonPage" */'@/modules/pokemon/pages/PokemonPage')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "NoPageFound" */'@/modules/shared/pages/NoPageFound')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
