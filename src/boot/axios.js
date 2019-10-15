import Vue from 'vue';
import axios from 'axios';



Vue.prototype.$axios = axios.create({
    //baseURL: 'http://192.168.0.19:3000/statics/api/',
    baseURL: 'http://localhost/statics/api/',
});

