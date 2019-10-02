const routes = [
    {
        path: '/',
        component: () => import('layouts/Default.vue'),
        children: [
            {
                path: '',
                component: () => import('pages/Index.vue'),
            },
            {
                path: 'place/:placeName/menu',
                component: () => import('pages/Menu.vue'),
            },
            {
                path: 'place/:placeName/dish/',
                component: () => import('pages/Dish.vue'),
            },
        ],
    },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () => import('pages/Error404.vue'),
    });
}

export default routes;
