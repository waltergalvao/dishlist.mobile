import Vue from 'vue';
import Vuex from 'vuex';
import menu from '../store/menu/index';
import dish from '../store/dish/index';
import restaurant from '../store/restaurant/index';
import review from '../store/review/index';
import ui from '../store/ui/index';
import login from '../store/login/index';

Vue.use(Vuex);

export default function(/* { ssrContext } */) {
    return new Vuex.Store({
        modules: {
            menu,
            dish,
            restaurant,
            review,
            ui,
            login,
        },

        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV,
    });
}
