import {SET_DISH} from "../mutationTypes";

export default {
    fetchDish({commit}) {
        return this._vm.$axios.get('/dish.json').then(response => {
            commit(SET_DISH, response.data);
        });
    },
};
