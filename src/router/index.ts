import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export type AppRouteRecordRaw = RouteRecordRaw & {
    hidden?: boolean
}

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../components/Home.vue'),
            meta: {
                title: 'ss',
            },
        },
        {
            path: '/about',
            component: () => import('../components/About.vue'),
            hidden: false,
        },
    ] as RouteRecordRaw[],
})

router.beforeEach((to, from, next) => {})

export default router
