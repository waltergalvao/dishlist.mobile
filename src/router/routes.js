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
                name: 'place.menu',
                path: 'place/:placeName/menu',
                component: () => import('pages/Menu.vue'),
            },
            {
                name: 'place.menu.dish',
                path: 'place/:placeName/dish/',
                component: () => import('pages/Dish.vue'),
                meta: {
                    showBackButton: true,
                    showNavigation: false,
                },
            },
            {
                path: 'place/:placeName/searchRestaurant/',
                component: () => import('pages/SearchRestaurant.vue'),
            },
            {
                path: 'place/:placeName/RestaurantSearchList/',
                component: () => import('pages/RestaurantSearchList.vue')
            }
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
