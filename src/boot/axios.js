import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$axios = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: process.env.VUE_APP_API_TIMEOUT,
});
