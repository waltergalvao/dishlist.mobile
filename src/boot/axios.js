import Vue from 'vue';
import axios from 'axios';

let vueAxios = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: process.env.VUE_APP_API_TIMEOUT,
});

vueAxios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // Always show message if there is any network error.
        // This error will occur when there is no response from the server
        if (
            error &&
            error.name &&
            error.name === 'Error' &&
            error.response === undefined
        ) {
            // show error message to the user
            Vue.prototype.$q.notify({
                message: 'There was an error, please try again.',
                icon: 'error',
                color: 'negative',
                timeout: 1500,
            });
        }
        return Promise.reject(error);
    },
);

Vue.prototype.$axios = vueAxios;
