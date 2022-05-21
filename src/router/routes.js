const routes = [
    {
        path: '/',
        redirect: '/coming-soon',
    },
    {
        path: '/coming-soon',
        component: () => import('@/views/coming-soon/ComingSoon.vue'),
    },
    {
        path: '/index',
        component: () => import('@/views/Index.vue'),
    },

]

export default routes
