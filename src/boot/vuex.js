import Vue from "vue";
import Vuex from "vuex";
import menu from "../store/menu/index";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        menu
    }
});
