import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
    base: '/',
    routes: [
        {
            path: '/',
            component: 'pages/index/index'
        },
        {
            path: '/projects',
            component: 'pages/projects'
        },
        {
            path: '/uses',
            component: 'pages/uses'
        },
        {
            path: '/about',
            component: 'pages/about'
        },
    ]
};
