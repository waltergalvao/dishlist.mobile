import Vue from 'vue';
import Vuex from 'vuex';
import menu from '../store/menu/index';
import dish from '../store/dish/index';

Vue.use(Vuex);

export default function(/* { ssrContext } */) {
    return new Vuex.Store({
        modules: {
            menu,
            dish,
        },

        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV,
    });
}
