import {SET_DISH} from '../mutationTypes';

export default {
    fetchDish({commit}, dishId) {
        return this._vm.$axios
            .get('http://dishlist.wmdd.ca/api/dish/read.php?id=' + dishId)
            .then(response => {
                commit(SET_DISH, response.data);
            });
    },
};
