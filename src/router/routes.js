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
                name: 'restaurant.menu',
                path: 'restaurant/:restaurantId/menu',
                component: () => import('pages/Menu.vue'),
            },
            {
                name: 'restaurant.menu.dish',
                path: 'restaurant/:restaurantId/dish/:dishId',
                component: () => import('pages/Dish.vue'),
                meta: {
                    showBackButton: true,
                    showNavigation: false,
                },
            },
            {
                path: 'restaurant/search/',
                component: () => import('pages/SearchRestaurant.vue'),
            },
            {
                path: 'restaurant/:placeName/restaurantSearchList/',
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
