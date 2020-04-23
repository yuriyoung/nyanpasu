import Vue from 'vue'
import Router from 'vue-router'

import redirects from './redirects.json'


// Utilities
import {
    layout,
    route,
    trailingSlash,
} from './util'

Vue.use(Router)

const routes = [
    layout('', 'Frontend', [
        ...Object.keys(redirects).map(key => ({
            path: key.replace(/^\//, ''),
            redirect: () => redirects[key].replace(/^\//, ''),
        })),
        route('', 'Home'), 
    ]),
    {
        component: () => import('@layouts/frontend/Index.vue'),
        path: '*',
        children: [{
            name: 'NotFound',
            path: '',
            component: () => import('@views/errors/404.vue'),
        }],
    },
]

export function createRouter() {
    const router = new Router({
        base: process.env.BASE_URL,
        mode: 'history',
        routes,
    })

    router.beforeEach((to, from, next) => {
        return to.path.endsWith('/') ? next() : next(trailingSlash(to.path))
    })

    // TODO: Vue use Analytics

    return router
}