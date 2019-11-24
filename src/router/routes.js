const routes = [
    {
        path: '/',
        component: () => import('layouts/Default.vue'),
        children: [
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
                name: 'restaurant.review',
                path: 'restaurant/:restaurantId/dish/:dishId/review',
                component: () => import('pages/AddReview.vue'),
                meta: {
                    showBackButton: true,
                    showNavigation: false,
                },
            },
            {
                name: 'home',
                path: '/',
                component: () => import('pages/Home.vue'),
            },
            {
                name: 'restaurant.search',
                path: 'restaurant/search',
                component: () => import('pages/SearchRestaurant.vue'),
            },
            {
                name: 'login',
                path: '/login',
                component: () => import('pages/Login.vue'),
            },
            {
                name: 'review.login',
                path: '/review/login',
                component: () => import('pages/Login.vue'),
                meta: {
                    showBackButton: true,
                    showNavigation: false,
                },
            },
            {
                name: 'register',
                path: '/register',
                component: () => import('pages/Register.vue'),
            },
            {
                name: 'review.register',
                path: '/review/register',
                component: () => import('pages/Register.vue'),
                meta: {
                    showBackButton: true,
                    showNavigation: false,
                },
            },
            {
                name: 'help',
                path: '/help',
                component: () => import('pages/Help.vue'),
            },
            {
                name: 'contact',
                path: '/contact',
                component: () => import('pages/Contact.vue'),
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
