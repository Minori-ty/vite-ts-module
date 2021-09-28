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
            path: '/user',
            component: () => import('../components/user.vue'),
            hidden: false,
            children: [
                {
                    path: '',
                    redirect: '/user/goods2',
                },
                {
                    path: 'goods1',
                    component: () => import('../components/goods1.vue'),
                },
                {
                    path: 'goods2',
                    component: () => import('../components/goods2.vue'),
                },
            ],
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('../components/404.vue'),
            hidden: false,
        },
    ] as RouteRecordRaw[],
})

router.beforeEach((to, from, next) => {
    next()
})

export default router
