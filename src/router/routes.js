
const routes = [
    {
        path: '/',
        component: () => import('@/views/Index'),
    },
    {
        path: '/tmp',
        component: () => import('@/views/copy/copy_index'),
    },
]

export default routes
